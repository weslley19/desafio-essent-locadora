import DataTable from "@/components/shared/data-table/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { getCategories } from "./actions"
import FormCategory from "./_components/form-category/form-category"

export default async function Categories() {
  const categories = await getCategories()

  const Body = (): JSX.Element => (
    <>
      {categories.data.map((category, index) => (
        <TableRow key={index}>
          <TableCell>{category.name}</TableCell>
          <TableCell>{category.createdAt}</TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <FormCategory />

      <DataTable
        title="Categoria dos filmes"
        header={["Nome", "Criado em"]}
        body={<Body />}
        className="mt-6"
      />
    </>
  )
}
