import { ThemeProvider } from "@/components/theme-provider"
import { ToastContainer } from 'react-toastify'
import SideBar from "@/components/shared/sidebar/sidebar";
import ListItem from "@/components/shared/sidebar/list-item";
import GroupListItem from "@/components/shared/sidebar/group-list-item";
import { DesktopIcon, PersonIcon, PlayIcon, TokensIcon } from "@radix-ui/react-icons";
import Header from "@/components/shared/header/header";
import Link from "next/link";

import 'react-toastify/dist/ReactToastify.css';

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
                <ListItem>
                  <TokensIcon className="mr-3" />
                  <Link href={'/'}>Home</Link>
                </ListItem>
                <GroupListItem title="CADASTROS">
                  <ListItem>
                    <PersonIcon className="mr-3" />
                    <Link href={'/person'}>Pessoas</Link>
                  </ListItem>
                </GroupListItem>
                <GroupListItem title="LOCAÇÃO">
                  <ListItem>
                    <PlayIcon className="mr-3" />
                    <Link href={'/movies'}>Filmes</Link>
                  </ListItem>
                  <ListItem><DesktopIcon className="mr-3" /> Alugados</ListItem>
                </GroupListItem>

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

