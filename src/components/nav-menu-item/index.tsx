"use client"

import { PropsWithChildren } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Link from "next/link"

interface NavMenuItemProps {
  path: string
}

export default function NavMenuItem({ path, children }: PropsWithChildren<NavMenuItemProps>) {
  const pathname = usePathname()

  return (
    <>
      <li>
        <Link
          href={path}
          className={clsx("flex items-center gap-3 h-8 rounded-md	px-3 my-0.5 hover:bg-primary hover:text-primary-foreground dark:text-foreground dark:hover:bg-muted  transition ease-in-out cursor-pointer",
            {
              "bg-primary dark:bg-muted text-primary-foreground": pathname === path
            }
          )}
        >
          {children}
        </Link>
      </li>
    </>
  )
}
