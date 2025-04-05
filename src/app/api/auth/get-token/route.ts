// app/api/auth/get-token/route.ts
import { getAccessToken } from '@auth0/nextjs-auth0';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { accessToken } = await getAccessToken();
  return new Response(JSON.stringify({ accessToken }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
