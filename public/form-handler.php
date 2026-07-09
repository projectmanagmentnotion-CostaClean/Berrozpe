<?php

declare(strict_types=1);

$recipient = 'david@instalberrozpe.com';
$allowedLocales = ['es', 'ca', 'en', 'de'];
$allowedServices = [
    'electricidad-y-domotica' => 'Electricidad y domotica',
    'lampisteria-y-climatizacion' => 'Lampisteria y climatizacion',
    'alarmas-y-camaras' => 'Alarmas y camaras',
];
$allowedReturnUrls = [
    '/es/contacto/',
    '/ca/contacte/',
    '/en/contact/',
    '/de/kontakt/',
];

function respond_json(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function respond_redirect(string $path, string $status): void
{
    $separator = strpos($path, '?') === false ? '?' : '&';
    header('Location: ' . $path . $separator . 'status=' . rawurlencode($status), true, 303);
    exit;
}

function expects_json(): bool
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    $requestedWith = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';

    return stripos($accept, 'application/json') !== false || strcasecmp($requestedWith, 'XMLHttpRequest') === 0;
}

function sanitize_text(string $value, int $maxLength): string
{
    $value = trim($value);
    $value = preg_replace("/[\r\n\t]+/", ' ', $value) ?? '';
    $value = strip_tags($value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
}

function sanitize_email_value(string $value): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\n"], '', $value);
    return filter_var($value, FILTER_SANITIZE_EMAIL) ?: '';
}

function normalize_phone(string $value): string
{
    return trim($value);
}

function resolve_return_url(array $allowedReturnUrls): string
{
    $returnUrl = isset($_POST['return_url']) ? trim((string) $_POST['return_url']) : '';

    if (!in_array($returnUrl, $allowedReturnUrls, true)) {
        return '/es/contacto/';
    }

    return $returnUrl;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    if (expects_json()) {
        respond_json(405, ['success' => false, 'message' => 'Method not allowed.']);
    }

    http_response_code(405);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Method not allowed.';
    exit;
}

$returnUrl = resolve_return_url($allowedReturnUrls);
$locale = isset($_POST['locale']) ? trim((string) $_POST['locale']) : 'es';
$name = sanitize_text((string) ($_POST['name'] ?? ''), 120);
$email = sanitize_email_value((string) ($_POST['email'] ?? ''));
$phone = sanitize_text(normalize_phone((string) ($_POST['phone'] ?? '')), 40);
$service = sanitize_text((string) ($_POST['service'] ?? ''), 80);
$message = sanitize_text((string) ($_POST['message'] ?? ''), 3000);
$privacy = isset($_POST['privacy']) ? (string) $_POST['privacy'] : '';
$honeypot = trim((string) ($_POST['website'] ?? ''));

$errors = [];

if (!in_array($locale, $allowedLocales, true)) {
    $locale = 'es';
}

if ($honeypot !== '') {
    $errors['website'] = 'Validation failed.';
}

if ($name === '') {
    $errors['name'] = 'Name is required.';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Email is required.';
}

if ($phone !== '' && !preg_match('/^[+()\d\s\-\/.]{7,20}$/', $phone)) {
    $errors['phone'] = 'Phone is invalid.';
}

if ($service === '' || !array_key_exists($service, $allowedServices)) {
    $errors['service'] = 'Service is required.';
}

if ($message === '') {
    $errors['message'] = 'Message is required.';
}

if (!in_array($privacy, ['1', 'on', 'true'], true)) {
    $errors['privacy'] = 'Privacy consent is required.';
}

if ($errors !== []) {
    if (expects_json()) {
        respond_json(422, [
            'success' => false,
            'message' => 'Validation failed.',
            'errors' => $errors,
        ]);
    }

    respond_redirect($returnUrl, 'error');
}

$subject = sprintf('[Instal Berrozpe][%s] Nuevo formulario de contacto', strtoupper($locale));
$bodyLines = [
    'Nuevo envio desde el formulario web.',
    '',
    'Idioma: ' . $locale,
    'Servicio: ' . ($allowedServices[$service] ?? $service),
    'Nombre: ' . $name,
    'Email: ' . $email,
    'Telefono: ' . ($phone !== '' ? $phone : '(no facilitado)'),
    '',
    'Mensaje:',
    $message,
];
$body = implode("\n", $bodyLines);

$headers = [
    'Content-Type: text/plain; charset=UTF-8',
    'From: Instal Berrozpe <' . $recipient . '>',
    'Reply-To: ' . $email,
];

$mailSent = @mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$mailSent) {
    if (expects_json()) {
      respond_json(500, [
          'success' => false,
          'message' => 'The form could not be sent.',
      ]);
    }

    respond_redirect($returnUrl, 'error');
}

if (expects_json()) {
    respond_json(200, [
        'success' => true,
        'message' => 'The form was sent.',
    ]);
}

respond_redirect($returnUrl, 'success');
