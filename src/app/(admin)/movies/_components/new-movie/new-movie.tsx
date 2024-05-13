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

const NewMovie = (): JSX.Element => {
  const { hookForm, onSubmit } = useNewMovie()
  const { openModal, handleOpenCloseModal } = useNewMovie()

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
              <Input {...hookForm.register('year')} />
              {hookForm.formState.errors.year && <span className="text-xs	text-red-600">{hookForm.formState.errors.year.message}</span>}
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2 mb-4">
              <Label>Quantidade de cópias:</Label>
              <Input {...hookForm.register('copies')} type="number" />
              {hookForm.formState.errors.copies && <span className="text-xs	text-red-600">{hookForm.formState.errors.copies.message}</span>}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Label>Categoria:</Label>
              <Select hookForm={hookForm} index="category">
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="kk">Apple</SelectItem>
                <SelectItem value="appless">Apple</SelectItem>
              </Select>
              {hookForm.formState.errors.category && <span className="text-xs	text-red-600">{hookForm.formState.errors.category.message}</span>}
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
              <Input {...hookForm.register('value')} />
              {hookForm.formState.errors.value && <span className="text-xs	text-red-600">{hookForm.formState.errors.value.message}</span>}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Label>Imagem:</Label>
              <Input {...hookForm.register('image')} type="file" />
              {hookForm.formState.errors.image && <span className="text-xs	text-red-600">{hookForm.formState.errors.image.message}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <Label>Elenco:</Label>
            <Select hookForm={hookForm} index="cast" className="w-full">
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="kk">Apple</SelectItem>
              <SelectItem value="appless">Apple</SelectItem>
            </Select>
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
