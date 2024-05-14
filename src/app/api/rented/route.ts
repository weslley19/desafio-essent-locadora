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
        renter: { connect: { id: parseInt(renterId) } },
        movie: { connect: { id: parseInt(movieId) } },
        lateFee: parseInt(lateFee),
        rentalDate,
        returnDate,
        returnDeadline,
        status,
        totalAmount: parseInt(totalAmount)
      }
    })
    return NextResponse.json({ message: 'Aluguel criado com sucesso', rent }, { status: 201 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'Erro' }, { status: 500 })
  }
}
