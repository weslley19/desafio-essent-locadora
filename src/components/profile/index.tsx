import { auth, signOut } from "@/auth"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User } from "lucide-react"
import { Button } from "../ui/button"

export default async function Profile() {
  const user = await auth()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="w-[2rem] h-[2rem] rounded-full m-auto"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-4 p-0 bg-background">
          <DropdownMenuLabel className="mb-2">{user?.user?.name ?? ''}</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-xs rounded-none cursor-pointer focus:bg-muted">
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="rounded-none cursor-pointer my-2 focus:bg-muted">
            <LogOut className="mr-2 h-4 w-4" />
            <form
              action={async () => {
                'use server'
                await signOut()
              }}
            >
              <Button type="submit" className="text-xs h-0 bg-transparent p-0 font-normal	text-foreground">Sair</Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu >
    </>
  )
}
