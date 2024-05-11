import prisma from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET () {
  console.log('chegou')
  return Response.json({ message: 'Hello World' })
}

export async function POST (req: NextRequest) {
  const { title, content }: { title: string, content: string } = await req.json()
  try {
    const post = await prisma.post.create({
      data: { title, content}
    })
    return NextResponse.json({ message: 'Post created', data: post })
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong'}, { status: 500 })
  }
}
