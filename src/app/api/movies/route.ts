import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { CreateMovie } from '@/types/movie'

export async function GET() {
  try {
    const movies = await prisma.movie.findMany({
      include: { category: true, cast: true },
    })
    return NextResponse.json({ message: 'Filmes encontrados com sucesso', data: movies }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Erro' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const {
    title, releaseYear, image, synopsis, categoryId,
    rentalValue, availableCopies, cast, directorId
  }: CreateMovie = await req.json()

  try {
    const movieAlreadyExists = await prisma.movie.findFirst({ where: { title: title } })
    if (movieAlreadyExists) {
      return NextResponse.json({ message: 'Filme já cadastrado' }, { status: 400 })
    }

    const castArray = JSON.parse(cast as any)
    const movie = await prisma.movie.create({
      data: {
        title,
        releaseYear: parseInt(releaseYear),
        image: image as string,
        synopsis,
        rentalValue: parseInt(rentalValue),
        availableCopies: parseInt(availableCopies as string),
        category: { connect: { id: parseInt(categoryId) } },
        cast: { connect: castArray.map((c: any) => ({ id: parseInt(c) })) },
        director: { connect: { id: parseInt(directorId as string) } }
      },
      include: { category: true, cast: true }
    });
    return NextResponse.json({ message: 'Filme criado com sucesso', movie }, { status: 201 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'Erro' }, { status: 500 })
  }
}
