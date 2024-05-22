import { PropsWithChildren } from "react"

interface NavMenuGroupItemsProps {
  title?: string
}

export default function NavMenuGroupItems({ title, children }: PropsWithChildren<NavMenuGroupItemsProps>) {
  return (
    <>
      <div className="flex flex-col mb-4">
        {title && <span className="px-3 mb-2 text-muted-foreground">{title}</span>}
        {children}
      </div>
    </>
  )
}
