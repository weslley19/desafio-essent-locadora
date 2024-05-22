import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { CreatePerson } from '@/types/person'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') as string

  try {
    if (id) {
      const persons = await prisma.person.findMany({
        where: {
          TypePersonType: {
            some: { typePerson: { id: parseInt(id) } }
          }
        },
        include: { TypePersonType: { include: { typePerson: true } } }
      })
      return NextResponse.json({ message: 'Pessoas encontradas com sucesso', data: persons }, { status: 200 })
    }
    const persons = await prisma.person.findMany({
      include: { TypePersonType: { include: { typePerson: true } } }
    })
    return NextResponse.json({ message: 'Pessoas encontradas com sucesso', data: persons }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Erro' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const { name, birthday, cpf, TypePersonType }: CreatePerson = await req.json()
  try {
    const cpfAlreadyExists = await prisma.person.findUnique({ where: { cpf: cpf } })
    if (cpfAlreadyExists) {
      return NextResponse.json({ message: 'CPF já cadastrado' }, { status: 400 })
    }

    const person = await prisma.person.create({
      data: {
        name,
        birthday: new Date(birthday),
        cpf,
        TypePersonType: {
          create: { typePerson: { connect: { id: Number(TypePersonType) } } }
        }
      },
      include: { TypePersonType: { include: { typePerson: true } } }
    })
    return NextResponse.json({ message: 'Pessoa criada com sucesso', person }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ message: 'Erro' }, { status: 500 })
  }
}
