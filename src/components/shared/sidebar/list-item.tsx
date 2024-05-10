interface ListItemProps {
  children: React.ReactNode
}

const ListItem = ({ children }: ListItemProps): JSX.Element => {
  return (
    <li
      className="rounded-xl flex justify-start gap-2 p-2
      items-center cursor-pointer transition-colors h-8
      w-9/12 mx-auto
      hover:bg-listItem hover:text-white"
    >
      {children}
    </li>
  )
}

export default ListItem
