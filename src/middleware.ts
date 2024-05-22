import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('authjs.session-token')
  // const token = request.cookies.get('_vercel_jwt')

  const signinURL = new URL('/signin', request.url)
  const dashboardURL = new URL('/', request.url)

  if (!token) {
    if (request.nextUrl.pathname === '/signin') {
      return NextResponse.next()
    }
    return NextResponse.redirect(signinURL)
  }

  if (request.nextUrl.pathname === '/signin') {
    return NextResponse.redirect(dashboardURL)
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|site|.*\\.png$).*)'],
}
