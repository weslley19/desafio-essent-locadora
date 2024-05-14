import { ThemeProvider } from "@/components/theme-provider"
import { ToastContainer } from 'react-toastify'
import SideBar from "@/components/shared/sidebar/sidebar";
import Header from "@/components/shared/header/header";

import 'react-toastify/dist/ReactToastify.css';
import MenuNavigation from "@/components/shared/menu-navigation/menu-navigation";
import { Button } from "@/components/ui/button";
import logout from "./actions";
import PrivateRoutes from "@/components/shared/private-routes/private-routes";

export default function RootLayout({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <PrivateRoutes>
          <ToastContainer />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <>
              <div className="flex font-extra">
                <SideBar>
                  <MenuNavigation />
                  <form action={logout} className="absolute w-full p-6 bottom-0">
                    <Button className="w-full">Sair</Button>
                  </form>
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
        </PrivateRoutes>
      </body>
    </html>
  )
}

