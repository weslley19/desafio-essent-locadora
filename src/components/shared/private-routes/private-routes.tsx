import { auth } from "../../../../auth"
import { redirect } from "next/navigation"

interface PrivateRoutesProps {
  children: React.ReactNode
}

const PrivateRoutes = async ({ children }: PrivateRoutesProps) => {
  const session = await auth()
  if (!session) {
    redirect('/site')
  }

  return (
    <>
      {session && children}
    </>
  )
}

export default PrivateRoutes
