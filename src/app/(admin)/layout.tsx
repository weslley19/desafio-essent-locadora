import { ThemeProvider } from "@/components/theme-provider"
import { ToastContainer } from 'react-toastify'
import SideBar from "@/components/shared/sidebar/sidebar";
import Header from "@/components/shared/header/header";

import 'react-toastify/dist/ReactToastify.css';
import MenuNavigation from "@/components/shared/menu-navigation/menu-navigation";

export default function RootLayout({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ToastContainer />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <div className="flex font-extralight">
              <SideBar>
                <MenuNavigation />
              </SideBar>
              <div className="w-full flex flex-col">
                <Header />
                <main className="flex-grow py-8 bg-content">
                  <div className="container">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}

