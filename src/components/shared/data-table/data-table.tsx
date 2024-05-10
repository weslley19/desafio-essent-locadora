import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps {
  title?: string
  header: string[]
  body: JSX.Element
}

const DataTable = ({ title, header, body }: DataTableProps) => {
  return (
    <div className="bg-container rounded-lg p-4">
      <p className="text-xs font-semibold mb-2">{title}</p>
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            {header?.map((item, index) => (
              <TableHead key={index}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {body}
        </TableBody>
      </Table>
    </div>
  )
}

export default DataTable
