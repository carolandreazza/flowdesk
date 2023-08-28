
import { NextResponse } from 'next/server'

const API_KEY: string = process.env.DATA_API_KEY as string;
 
export async function GET() {
  const res = await fetch('https://quotes.rest/qod', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache,private',
      'X-TheySaidSo-Api-Secret': API_KEY,
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}