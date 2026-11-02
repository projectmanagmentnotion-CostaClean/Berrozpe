# Vercel deployment

## Build

- Framework: Astro, static output.
- Production branch: `master` (the repository's `main` branch is older and must not be selected).
- Build command: `npm run build`.
- Output directory: `dist`.
- Redirects, including `/` to `/es/` and the existing legacy URL map, live in `vercel.json`.

## Contact form

The public form posts to the Vercel Function at `/api/contact`. It validates the same required fields and allowed services as the former PHP handler, checks the hidden honeypot and elapsed form time, limits payload size, checks browser origins, and applies a best-effort per-function-instance request limit. It sends the enquiry through the Resend HTTPS API; the existing email service and DNS records are not used or changed by the function.

Configure these values in the Vercel project's Production environment (and Preview only when preview submissions are intentionally enabled):

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Secret API key from the customer's Resend account; never commit it or send it in chat. |
| `RESEND_FROM_EMAIL` | Sender address on a domain verified in Resend, e.g. `Instal Berrozpe <formularios@instalberrozpe.com>`. |
| `CONTACT_TO_EMAIL` | `david@instalberrozpe.com`. |

Resend's free transactional tier currently advertises 3,000 messages/month with a 100/day limit. Sending requires the sender domain to be verified. Do not use a free trial sender for real customer enquiries.

Before enabling real form delivery, the account owner must create the Resend account/API key, verify the sender domain, and review the privacy notice and processor terms. Resend may request DNS authentication records; inspect them against the live zone before any human applies them. Do not replace an existing SPF TXT record, remove MX records, or alter DKIM/DMARC records. No DNS change is performed by this repository or deployment workflow.

## Release checklist

1. Confirm the connected Vercel team is Pro; never deploy this project to the current Hobby account.
2. Link `projectmanagmentnotion-CostaClean/Berrozpe` and set Production Branch to `master`.
3. Build and deploy the `master` commit to Production to obtain the provisional `.vercel.app` URL.
4. Set the form environment variables and redeploy. Test invalid input, honeypot, throttling, and one real message with the account owner.
5. Add `instalberrozpe.com` and `www.instalberrozpe.com` to the project. Report Vercel's DNS instructions without applying them.
6. Only after the human reviews the DNS set and authorizes changes may records be changed. Preserve all existing email records and mailboxes.

