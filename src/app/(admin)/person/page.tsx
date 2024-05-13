import DataTable from "@/components/shared/data-table/data-table"
import { TableCell, TableRow } from "@/components/ui/table"
import { getPerson } from "./actions"
import FormPerson from "./_components/form-person/form-person"

export default async function Person() {
  const persons = await getPerson()

  const Body = (): JSX.Element => (
    <>
      {persons.data.map((person, index) => (
        <TableRow key={index}>
          <TableCell>{person.name}</TableCell>
          <TableCell>{person.cpf}</TableCell>
          <TableCell>{person.birthday}</TableCell>
          <TableCell>{person?.TypePersonType?.length! > 0 && person?.TypePersonType?.[person.TypePersonType.length - 1]?.typePerson.name}</TableCell>
          <TableCell>{person.createdAt ?? '-'}</TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <FormPerson />

      <DataTable
        title="Lista de pessoas"
        header={["Nome", "CPF", "Data de nascimento", "Tipo", "Criado em"]}
        body={<Body />}
        className="mt-6"
      />
    </>
  )
}
