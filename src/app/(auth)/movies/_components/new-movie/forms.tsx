"use client"

import { useNewMovie } from "./core/hook/useNewMovie"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckIcon } from "@radix-ui/react-icons"
import { Person } from "@/types/person"
import Modal from "@/components/modal"
import Select from "@/components/select"
import { LabelAndValue } from "@/types/common"
import MultiSelect from "@/components/multi-select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { moneyMask } from "@/lib/utils"

interface FormsProps {
  cast: Person[]
}

const Forms = ({ cast }: FormsProps) => {
  const { hookForm, onSubmit, handleFileChange } = useNewMovie()

  const options: LabelAndValue[] = [
    { value: '1', label: 'Comédia' },
    { value: '2', label: 'Drama' },
    { value: '3', label: 'Aventura' },
    { value: '4', label: 'Ação' },
    { value: '5', label: 'Desenho' },
  ]

  const actors = cast?.filter(person => person?.TypePersonType?.some(type => type.typePersonId === 2))
  const director = cast?.filter(person => person?.TypePersonType?.some(type => type.typePersonId === 3))

  return (
    <Modal
      title="Novo filme"
      labelButton="Adicionar filme"
    >
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex gap-3 mb-4">
          <div className="flex flex-col gap-2">
            <Label>Título:</Label>
            <Input {...hookForm.register('title')} />
            {hookForm.formState.errors.title && <span className="text-xs	text-red-600">{hookForm.formState.errors.title.message}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Ano de lançamento:</Label>
            <Input {...hookForm.register('releaseYear')} />
            {hookForm.formState.errors.releaseYear && <span className="text-xs	text-red-600">{hookForm.formState.errors.releaseYear.message}</span>}
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="flex flex-col gap-2 w-full">
            <Label>Quantidade de cópias:</Label>
            <Input {...hookForm.register('availableCopies')} type="number" />
            {hookForm.formState.errors.availableCopies && <span className="text-xs	text-red-600">{hookForm.formState.errors.availableCopies.message}</span>}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label>Categoria:</Label>
            <Select
              {...hookForm.register('categoryId')}
              options={options}
              onChange={(event) => { hookForm.setValue('categoryId', event.value) }}
            />
            {hookForm.formState.errors.categoryId && <span className="text-xs	text-red-600">{hookForm.formState.errors.categoryId.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Sinopse:</Label>
          <Textarea {...hookForm.register('synopsis')} placeholder="Digite um resumo sobre o filme" />
          {hookForm.formState.errors.synopsis && <span className="text-xs	text-red-600">{hookForm.formState.errors.synopsis.message}</span>}
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-2 mb-4">
            <Label>Valor da locação:</Label>
            <Input
              {...hookForm.register('rentalValue')}
              onChange={(event) => { hookForm.setValue('rentalValue', moneyMask(event.target.value)) }}
            />
            {hookForm.formState.errors.rentalValue && <span className="text-xs	text-red-600">{hookForm.formState.errors.rentalValue.message}</span>}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label>Imagem:</Label>
            <Input {...hookForm.register('image')} onChange={handleFileChange} type="file" />
            {hookForm.formState.errors.image && <span className="text-xs	text-red-600">{hookForm.formState.errors?.image?.message as string}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Elenco:</Label>
          <MultiSelect
            hookForm={hookForm}
            index="cast"
            options={actors?.map((c) => (
              { label: c.name, value: c.name, id: c.id }
            ))}
          />
          {hookForm.formState.errors.cast && <span className="text-xs	text-red-600">{hookForm.formState.errors.cast.message}</span>}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label>Diretor:</Label>
          <Select
            {...hookForm.register('directorId')}
            options={director?.map((c) => (
              { label: c.name, value: String(c.id)}
            ))}
            onChange={(event) => { hookForm.setValue('directorId', event.value) }}
          />
          {hookForm.formState.errors.directorId && <span className="text-xs	text-red-600">{hookForm.formState.errors.directorId.message}</span>}
        </div>

        <hr className="my-5" />

        <div className="flex justify-end">
          <Button variant={"default"} disabled={hookForm.formState.isSubmitting}>
            <CheckIcon className="mr-2" />
            Confirmar
            {hookForm.formState.isSubmitting && <span>....</span>}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default Forms
