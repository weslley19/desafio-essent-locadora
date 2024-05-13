import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { CreateRental } from '@/types/rented'
import { create } from 'domain'

export async function GET() {
  try {
    const persons = await prisma.rental.findMany({
      include: { movie: true, renter: true }
    })
    return NextResponse.json(persons)
  } catch (err) {
    return NextResponse.json({ message: 'Erro' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const {
    renter, renterId, movie, movieId, lateFee,
    rentalDate, returnDate, returnDeadline, status,
    totalAmount
  }: CreateRental = await req.json()

  try {
    const movieAvailable = await prisma.movie.findUnique({ where: { id: parseInt(movieId) } })
    if (!movieAvailable || movieAvailable.availableCopies <= 0) {
      return NextResponse.json({ message: 'Filme não disponível para aluguel' }, { status: 400 })
    }

    const existingRental = await prisma.rental.findFirst({
      where: { renterId: parseInt(renterId), status: { not: 'Returned' } }
    })
    if (existingRental) {
      return NextResponse.json({ message: 'Usuário já possui um aluguel em andamento' }, { status: 400 })
    }

    const rent = await prisma.rental.create({
      data: {
        renterId: 124,
        movieId: 1,
        lateFee: 0, // Defina um valor padrão para lateFee
        rentalDate: "1999-11-10T00:00:00.000Z", // Use o formato de data ISO 8601
        returnDate: "1999-11-10T00:00:00.000Z", // Use o formato de data ISO 8601
        returnDeadline: "1999-11-10T00:00:00.000Z", // Forneça uma data válida para returnDeadline
        status: "Regular", // Use uma das opções válidas para status
        totalAmount: 10
      }
    })
    return NextResponse.json({ message: 'Aluguel criado com sucesso', rent }, { status: 201 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'Erro' }, { status: 500 })
  }
}
