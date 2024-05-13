import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { CreateTypesPerson } from '@/types/types-person'

export async function GET() {
  try {
    const persons = await prisma.typePerson.findMany()
    return NextResponse.json(persons)
  } catch (err) {
    return NextResponse.json({ message: 'Erro' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const { name }: CreateTypesPerson = await req.json()
  try {
    const typePersonAlreadyExists = await prisma.typePerson.findFirst({ where: { name: name } })
    if (typePersonAlreadyExists) {
      return NextResponse.json({ message: 'Tipo de pessoa já cadastrado' }, { status: 400 })
    }

    const person = await prisma.typePerson.create({
      data: { name }
    })
    return NextResponse.json({ message: 'Tipo de Pessoa criada com sucesso', person }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ message: 'Erro' }, { status: 500 })
  }
}
