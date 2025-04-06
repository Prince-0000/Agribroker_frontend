import { getAccessToken } from '@auth0/nextjs-auth0/edge'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { accessToken } = await getAccessToken(req) 
  return new Response(JSON.stringify({ accessToken }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
