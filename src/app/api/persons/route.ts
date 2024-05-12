import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET (params: object) {
  const posts = await prisma.person.findMany()
  return NextResponse.json({ message: 'Dados encontrado', data: posts })
}

// async function POST (req: NextRequest) {
//   const { title, content }: { title: string, content: string } = await req.json()
//   try {
//     const post = await prisma.post.create({
//       data: { title, content}
//     })
//     return NextResponse.json({ message: 'Post created', data: post })
//   } catch (err) {
//     return NextResponse.json({ error: 'Something went wrong'}, { status: 500 })
//   }
// }
