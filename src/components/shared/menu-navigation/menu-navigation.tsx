import ListItem from "../sidebar/list-item"
import Link from "next/link"
import GroupListItem from "../sidebar/group-list-item"
import { DesktopIcon, PersonIcon, PlayIcon, TokensIcon } from "@radix-ui/react-icons"

const MenuNavigation = (): JSX.Element => {
  return (
    <>
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
    </>
  )
}

export default MenuNavigation
