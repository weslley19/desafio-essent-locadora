import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { CreateTypesPerson } from '@/types/types-person'

export async function GET() {
  try {
    const persons = await prisma.movieCategory.findMany()
    return NextResponse.json(persons)
  } catch (err) {
    return NextResponse.json({ message: 'Erro' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const { name }: CreateTypesPerson = await req.json()
  try {
    const categoryAlreadyExists = await prisma.movieCategory.findFirst({ where: { name: name } })
    if (categoryAlreadyExists) {
      return NextResponse.json({ message: 'Categoria já cadastrado' }, { status: 400 })
    }

    const category = await prisma.movieCategory.create({
      data: { name }
    })
    return NextResponse.json({ message: 'Categoria criada com sucesso', category }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ message: 'Erro' }, { status: 500 })
  }
}
