"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import Loading from "@/components/shared/loading/loading"
import Modal from "@/components/shared/modals/modal"
import Select from "@/components/shared/select/select"
import { SelectItem } from "@/components/ui/select"
import { useFormRented } from "./core/hook/useFormRented"
import { useRented } from "../../core/hook/useRented"
import Combobox from "@/components/shared/search-select/search-select"

const FormRented = (): JSX.Element => {
  const { hookForm, onSubmit } = useFormRented()
  const { openModal, handleOpenCloseModal } = useRented()

  console.log(hookForm.formState.errors)

  return (
    <Modal
      title="Novo aluguel"
      labelButton="Adicionar aluguel"
      open={openModal}
      onClose={handleOpenCloseModal}
    >
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <Label>Locador:</Label>
          <Select hookForm={hookForm} index="renterId">
            <SelectItem value="124">Weslley</SelectItem>
            <SelectItem value="125">Bia</SelectItem>
          </Select>
          {hookForm.formState.errors.renterId && <span className="text-xs	text-red-600">{hookForm.formState.errors.renterId.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Filme:</Label>
          <Select hookForm={hookForm} index="movieId">
            <SelectItem value="1">Volta os que não foram</SelectItem>
            <SelectItem value="2">Tudo em casa</SelectItem>
          </Select>
          {hookForm.formState.errors.movieId && <span className="text-xs	text-red-600">{hookForm.formState.errors.movieId.message}</span>}
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-2 mb-4">
            <Label>Retirada:</Label>
            <Input {...hookForm.register('rentalDate')} />
            {hookForm.formState.errors.rentalDate && <span className="text-xs	text-red-600">{hookForm.formState.errors.rentalDate.message}</span>}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <Label>Devolução:</Label>
            <Input {...hookForm.register('returnDate')} />
            {hookForm.formState.errors.returnDate && <span className="text-xs	text-red-600">{hookForm.formState.errors.returnDate.message}</span>}
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-2 mb-4">
            <Label>Multa:</Label>
            <Input {...hookForm.register('lateFee')} />
            {hookForm.formState.errors.lateFee &&
              <span className="text-xs	text-red-600">{hookForm.formState.errors.lateFee.message}</span>}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <Label>Total:</Label>
            <Input {...hookForm.register('totalAmount')} />
            {hookForm.formState.errors.totalAmount && <span className="text-xs	text-red-600">{hookForm.formState.errors.totalAmount.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Situação:</Label>
          <Select hookForm={hookForm} index="status">
            <SelectItem value="1">Regular</SelectItem>
            <SelectItem value="2">Atrasado</SelectItem>
            <SelectItem value="3">Entregue</SelectItem>
          </Select>
          {hookForm.formState.errors.status && <span className="text-xs	text-red-600">{hookForm.formState.errors.status.message}</span>}
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
  )
}

export default FormRented
