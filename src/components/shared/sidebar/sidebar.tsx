interface SideBarProps {
  children: React.ReactNode
}

const SideBar = ({ children }: SideBarProps): JSX.Element => {
  return (
    <aside className="w-80 min-h-screen bg-aside relative">
      <nav className="mt-20">
        <ul className="flex flex-col gap-4 pt-10">
          {children}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
