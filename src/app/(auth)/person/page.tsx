import { TableCell, TableRow } from "@/components/ui/table"
import { getPerson } from "./actions"
import FormPerson from "./_components/form-person/form-person"
import { cpfMask, dateBrFormat } from "@/lib/utils"
import DataTable from "@/components/data-table"

export default async function Person() {
  const persons = await getPerson()

  const Body = (): JSX.Element => (
    <>
      {persons?.map((person) => (
        <TableRow key={person.id}>
          <TableCell>{person.name}</TableCell>
          <TableCell>{cpfMask(person.cpf)}</TableCell>
          <TableCell>{dateBrFormat(person.birthday)}</TableCell>
          <TableCell>{person?.TypePersonType?.length! > 0 && person?.TypePersonType?.[person.TypePersonType.length - 1]?.typePerson.name}</TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <FormPerson />

      <div className="mt-10" />

      <DataTable
        title="Lista de pessoas"
        header={["Nome", "CPF", "Data de nascimento", "Tipo"]}
        body={<Body />}
        total={persons?.length ?? 0}
      />
    </>
  )
}
