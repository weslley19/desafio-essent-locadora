import { PropsWithChildren } from "react"

interface PageTitleProps {
  className?: string
}

export default function PageTitle({ className = '', children }: PropsWithChildren<PageTitleProps>) {
  return (
    <>
      <h1 className={`text-[1.5rem] ${className} font-semibold`}>{children}</h1>
    </>
  )
}
