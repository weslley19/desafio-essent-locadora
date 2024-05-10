interface ListItemProps {
  children: React.ReactNode
}

const ListItem = ({ children }: ListItemProps): JSX.Element => {
  return (
    <li
      className="rounded-xl mx-auto w-3/5 h-8 flex
      items-center cursor-pointer transition-colors pl-3
      hover:bg-listItem hover:text-white"
    >
      {children}
    </li>
  )
}

export default ListItem
