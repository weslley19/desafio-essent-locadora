import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db"

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
        password
      }
    })
    console.log(user)
    if (!user) {
      return NextResponse.json({ message: 'Usuário ou senha inválidos' }, { status: 401 })
    }
    return NextResponse.json({ message: 'Login feito com sucesso', data: user }, { status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'Erro ao fazer login', erro: err }, { status: 500 })
  }
}
