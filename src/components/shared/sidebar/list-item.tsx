"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface ListItemProps {
  href: string
  children: React.ReactNode
}

const ListItem = ({ href, children }: ListItemProps): JSX.Element => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li
      className={`rounded-xl flex justify-start gap-2 p-2
      items-center cursor-pointer transition-colors h-9
      w-9/12 mx-auto
      hover:bg-content
      ${isActive ? "bg-content font-semibold" : ""}`}
    >
      <Link href={href} className="w-full flex gap-2 items-center">
        {children}
      </Link>
    </li>
  )
}

export default ListItem
