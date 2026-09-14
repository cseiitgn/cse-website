import { timingSafeEqual } from 'node:crypto';

const encoder = new TextEncoder();
const privateHeaders = {
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  Vary: 'Authorization',
};

export default async function previewAuth(request, context) {
  if (context.deploy?.context === 'production') return context.next();

  const credentials = Netlify.env.get('CSE_PREVIEW_CREDENTIALS');
  if (!credentials || !/^[A-Za-z0-9_-]+:[A-Za-z0-9_-]{20,}$/.test(credentials)) {
    return new Response('Review access is not configured.', {
      status: 503,
      headers: privateHeaders,
    });
  }

  const supplied = request.headers.get('Authorization')?.match(/^Basic ([A-Za-z0-9+/]+=*)$/i)?.[1] ?? '';
  const actual = encoder.encode(supplied);
  const expected = encoder.encode(btoa(credentials));
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return new Response('Enter the CSE review username and password to continue.', {
      status: 401,
      headers: {
        ...privateHeaders,
        'Content-Type': 'text/plain; charset=utf-8',
        'WWW-Authenticate': 'Basic realm="IITGN CSE review", charset="UTF-8"',
      },
    });
  }

  const upstream = await context.next();
  const headers = new Headers(upstream.headers);
  for (const [key, value] of Object.entries(privateHeaders)) {
    if (key === 'Vary' && headers.has(key)) headers.append(key, value);
    else headers.set(key, value);
  }
  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}
