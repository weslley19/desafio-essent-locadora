interface GroupListItemProps {
  title: string
  children: React.ReactNode
}

const GroupListItem = ({ title, children }: GroupListItemProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="text-xs font-semibold mt-6 mb-3 pl-2 w-9/12 mx-auto">{title}</h6>
      {children}
    </div>
  )
}

export default GroupListItem
