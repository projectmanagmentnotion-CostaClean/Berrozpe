import assert from 'node:assert/strict';
import test from 'node:test';
import endpoint from '../api/contact.ts';

const validFields = {
  locale: 'es',
  return_url: '/es/contacto/',
  name: 'Test Visitor',
  email: 'visitor@example.com',
  phone: '676 04 33 89',
  service: 'electricidad-y-domotica',
  message: 'Test enquiry',
  privacy: '1',
  website: '',
  form_started_at: String(Date.now() - 5000),
};

function configureTestMail(t) {
  const keys = ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'CONTACT_TO_EMAIL'];
  const previous = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
  process.env.RESEND_API_KEY = 'test_key_do_not_log';
  process.env.RESEND_FROM_EMAIL = 'Instal Berrozpe <formularios@example.com>';
  process.env.CONTACT_TO_EMAIL = 'david@instalberrozpe.com';
  t.after(() => {
    for (const key of keys) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  });
}

function request(fields = validFields, { ip = `192.0.2.${Math.floor(Math.random() * 200) + 1}`, origin = 'https://instalberrozpe-web.vercel.app', accept = 'application/json' } = {}) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.set(key, value);
  return new Request('https://instalberrozpe-web.vercel.app/api/contact', {
    method: 'POST',
    headers: { Origin: origin, Accept: accept, 'X-Forwarded-For': ip },
    body,
  });
}

test('rejects methods and cross-origin requests', async () => {
  const method = await endpoint.fetch(new Request('https://instalberrozpe-web.vercel.app/api/contact'));
  assert.equal(method.status, 405);
  const origin = await endpoint.fetch(request(validFields, { origin: 'https://attacker.example' }));
  assert.equal(origin.status, 403);
});

test('rejects invalid fields and the honeypot before sending', async () => {
  const invalid = await endpoint.fetch(request({ ...validFields, service: 'unknown' }));
  assert.equal(invalid.status, 422);
  assert.deepEqual((await invalid.json()).errors.service, 'Service is required.');
  const spam = await endpoint.fetch(request({ ...validFields, website: 'bot-filled' }));
  assert.equal(spam.status, 422);
  assert.ok((await spam.json()).errors.website);
});

test('limits repeated requests from one client instance', async () => {
  const ip = '192.0.2.240';
  const responses = [];
  for (let index = 0; index < 6; index += 1) {
    responses.push(await endpoint.fetch(request({ ...validFields, name: '' }, { ip })));
  }
  assert.equal(responses.at(-1).status, 429);
});

test('sends a valid request through Resend without exposing its API key', async (t) => {
  configureTestMail(t);
  const originalFetch = globalThis.fetch;
  let sentMessage;
  globalThis.fetch = async (url, init) => {
    assert.equal(url, 'https://api.resend.com/emails');
    assert.equal(init.headers.Authorization, 'Bearer test_key_do_not_log');
    sentMessage = JSON.parse(init.body);
    return Response.json({ id: 'test-message-id' }, { status: 200 });
  };
  t.after(() => {
    globalThis.fetch = originalFetch;
  });

  const response = await endpoint.fetch(request());
  assert.equal(response.status, 200);
  assert.deepEqual(sentMessage.to, ['david@instalberrozpe.com']);
  assert.equal(sentMessage.reply_to, 'visitor@example.com');
  assert.match(sentMessage.text, /Test enquiry/);
});

test('uses an allowlisted redirect for non-JavaScript submissions', async (t) => {
  configureTestMail(t);
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => Response.json({ id: 'test-message-id' }, { status: 200 });
  t.after(() => {
    globalThis.fetch = originalFetch;
  });

  const response = await endpoint.fetch(request(validFields, { accept: 'text/html' }));
  assert.equal(response.status, 303);
  assert.equal(response.headers.get('location'), 'https://instalberrozpe-web.vercel.app/es/contacto/?status=success');
});

