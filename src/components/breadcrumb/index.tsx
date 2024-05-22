"use client"

import { translateURLName } from "@/lib/utils"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumb() {
  const path = usePathname()
  const routerName = translateURLName(path)

  return (
    <>
      <div className="border-b px-3 py-2 text-xs flex items-center gap-2">
        <Link href={'/'}>
          <Home size={16} />
        </Link>
        <ChevronRight size={16} />
        {routerName}
      </div>
    </>
  )
}
