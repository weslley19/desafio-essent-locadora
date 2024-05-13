"use client"

import { Label } from "@/components/ui/label"
import { useNewMovie } from "./core/hook/useNewMovie"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import Loading from "@/components/shared/loading/loading"
import Select from "@/components/shared/select/select"
import { SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Modal from "@/components/shared/modals/modal"
import MultiSelect from "@/components/shared/multi-select/multi-select"

const NewMovie = (): JSX.Element => {
  const { hookForm, onSubmit, openModal, handleOpenCloseModal, handleFileChange } = useNewMovie()

  return (
    <>
      <Modal
        title="Novo filme"
        labelButton="Adicionar filme"
        open={openModal}
        onClose={handleOpenCloseModal}
      >
        <form onSubmit={hookForm.handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="flex flex-col gap-2 mb-4">
              <Label>Título:</Label>
              <Input {...hookForm.register('title')} />
              {hookForm.formState.errors.title && <span className="text-xs	text-red-600">{hookForm.formState.errors.title.message}</span>}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Label>Ano de lançamento:</Label>
              <Input {...hookForm.register('releaseYear')} />
              {hookForm.formState.errors.releaseYear && <span className="text-xs	text-red-600">{hookForm.formState.errors.releaseYear.message}</span>}
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2 mb-4">
              <Label>Quantidade de cópias:</Label>
              <Input {...hookForm.register('availableCopies')} type="number" />
              {hookForm.formState.errors.availableCopies && <span className="text-xs	text-red-600">{hookForm.formState.errors.availableCopies.message}</span>}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Label>Categoria:</Label>
              <Select hookForm={hookForm} index="categoryId">
                <SelectItem value="1">Comédia</SelectItem>
                <SelectItem value="kk">Apple</SelectItem>
                <SelectItem value="appless">Apple</SelectItem>
              </Select>
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
              <Input {...hookForm.register('rentalValue')} />
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
            <MultiSelect hookForm={hookForm} index="cast" options={[
              { value: '124', label: 'UM' },
              { value: '125', label: 'dois' },
              { value: 'tres', label: 'tres' },
            ]} />
            {hookForm.formState.errors.cast && <span className="text-xs	text-red-600">{hookForm.formState.errors.cast.message}</span>}
          </div>

          <hr className="my-5" />

          <div className="flex justify-end">
            <Button variant={"default"} disabled={hookForm.formState.isSubmitting}>
              <CheckIcon className="mr-2" />
              Confirmar
              {hookForm.formState.isSubmitting && <Loading />}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default NewMovie
