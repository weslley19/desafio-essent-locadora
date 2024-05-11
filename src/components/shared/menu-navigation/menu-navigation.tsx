import ListItem from "../sidebar/list-item"
import Link from "next/link"
import GroupListItem from "../sidebar/group-list-item"
import { ClockIcon, DesktopIcon, PersonIcon, PlayIcon, TokensIcon } from "@radix-ui/react-icons"

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
        <ListItem href="/reservas-pendentes">
          <ClockIcon className="mr-3" />
          Pedidos
        </ListItem>
      </GroupListItem>
    </>
  )
}

export default MenuNavigation
