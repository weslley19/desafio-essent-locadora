import Aside from "@/components/aside"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex">
        <Aside />
        <main className="flex min-h-screen flex-col flex-1 bg-container">
          <Header />
          <div className="px-3 py-3 container bg-secondary grow shrink-0 basis-auto">{children}</div>
          <Toaster />
          <Footer />
        </main>
      </div>
    </>
  )
}
