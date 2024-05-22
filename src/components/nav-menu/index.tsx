"use client"

import { Clapperboard, Globe, Home, Popcorn, Users } from "lucide-react";
import NavMenuItem from "../nav-menu-item";
import NavMenuGroupItems from "../nav-menu-group-items";

export default function NavMenu() {
  return (
    <>
      <nav className="mt-6">
        <ul className="text-xs">
          <NavMenuGroupItems>
            <NavMenuItem path="/">
              <Home size={16} />
              Dashboard
            </NavMenuItem>
            <NavMenuItem path="/person">
              <Users size={16} />
              Pessoas
            </NavMenuItem>
          </NavMenuGroupItems>

          <NavMenuGroupItems title="Locação">
            <NavMenuItem path="/movies">
              <Clapperboard size={16} />
              Filmes
            </NavMenuItem>
            <NavMenuItem path="/rented">
              <Popcorn size={16} />
              Alugados
            </NavMenuItem>
            <NavMenuItem path="/site">
              <Globe size={16} />
              Site
            </NavMenuItem>
          </NavMenuGroupItems>
        </ul>
      </nav>
    </>
  )
}
