"use client"

import Image from "next/image"
import { useSite } from "../hook/useSite"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Header = (): JSX.Element => {
  const { isScrolled } = useSite()

  return (
    <header className={`fixed w-full bg-black h-14 flex justify-between items-center pl-20
        top-0	z-50	transition-colors duration-300
        ${isScrolled ? 'bg-black' : 'bg-transparent'}`
      }
    >
      <Image
        src={'https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png'}
        alt="Netflix"
        className="h-8"
        width={100}
        height={100}
      />

      <Button className="mr-20">
        <Link href={'/autenticar'}>Entrar</Link>
      </Button>
    </header>
  )
}

export default Header
