"use server"

import ListItem from "../sidebar/list-item"
import GroupListItem from "../sidebar/group-list-item"
import { ArchiveIcon, ClockIcon, DesktopIcon, PersonIcon, PlayIcon, TokensIcon } from "@radix-ui/react-icons"

const MenuNavigation = (): JSX.Element => {
  return (
    <>
      <ListItem href="/">
        <TokensIcon className="mr-3" />
        Home
      </ListItem>
      <GroupListItem title="CADASTROS">
        <ListItem href="/pessoas">
          <PersonIcon className="mr-3" />
          Pessoas
        </ListItem>
        <ListItem href="/tipos-usuario">
          <PersonIcon className="mr-3" />
          Tipos de usuário
        </ListItem>
        <ListItem href="/filmes/categorias">
          <ArchiveIcon className="mr-3" />
          Categorias
        </ListItem>
      </GroupListItem>
      <GroupListItem title="LOCAÇÃO">
        <ListItem href="/filmes">
          <PlayIcon className="mr-3" />
          Filmes
        </ListItem>
        <ListItem href="/alugados">
          <DesktopIcon className="mr-3" />
          Alugados
        </ListItem>
        {/* <ListItem href="/reservas-pendentes">
          <ClockIcon className="mr-3" />
          Pedidos
        </ListItem> */}
      </GroupListItem>
    </>
  )
}

export default MenuNavigation
