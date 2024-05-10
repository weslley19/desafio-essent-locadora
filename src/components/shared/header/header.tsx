import Avatar from "../avatar/avatar"
import { ThemeToggle } from "../theme-toggle"

const Header = (): JSX.Element => {
  return (
    <header className="h-20 bg-header flex gap-4 items-center	justify-end px-4">
      <ThemeToggle />
      <Avatar />
    </header>
  )
}

export default Header
