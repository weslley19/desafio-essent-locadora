/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import { useFormPerson } from "./core/hook/useFormUser"
import Modal from "@/components/modal"
import Select from "@/components/select"
import { LabelAndValue } from "@/types/common"
import { formatDateInput, formatCPFInput } from "@/lib/utils"
import { Person } from "@/types/person"
import { useEffect } from "react"

interface FormPersonProps {
  editPerson?: Person
  show?: boolean
  onClose?: () => void
}

const FormPerson = ({ editPerson, show, onClose }: FormPersonProps): JSX.Element => {
  const { hookForm, onSubmit } = useFormPerson()

  useEffect(() => {
    if (editPerson) {
      hookForm.setValue('name', editPerson.name)
      hookForm.setValue('birthday', formatDateInput(editPerson.birthday))
      hookForm.setValue('cpf', formatCPFInput(editPerson.cpf))
    }
  }, [editPerson])

  return (
    <Modal
      title={`${editPerson}` ? 'Editar pessoa' : 'Criar pessoa'}
      labelButton="Adicionar pessoa"
      open={show}
      onClose={onClose}
    >
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <Label>Nome:</Label>
          <Input {...hookForm.register('name')} />
          {hookForm.formState.errors.name && <span className="text-xs	text-red-600">{hookForm.formState.errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Data de ascimento:</Label>
          <Input
            {...hookForm.register('birthday')}
            onChange={(event) => { hookForm.setValue('birthday', formatDateInput(event.target.value)) }}
          />
          {hookForm.formState.errors.birthday && <span className="text-xs	text-red-600">{hookForm.formState.errors.birthday.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>CPF:</Label>
          <Input
            {...hookForm.register('cpf')}
            onChange={(event) => { hookForm.setValue('cpf', formatCPFInput(event.target.value)) }}
          />
          {hookForm.formState.errors.cpf && <span className="text-xs	text-red-600">{hookForm.formState.errors.cpf.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Tipo de usuário:</Label>
          <Select
            {...hookForm.register('TypePersonType')}
            options={[
              { value: '1', label: 'Cliente' },
              { value: '2', label: 'Ator' },
              { value: '3', label: 'Diretor' }
            ]}
            onChange={(event) => { hookForm.setValue('TypePersonType', event.value) }}
          />
          {hookForm.formState.errors.TypePersonType && <span className="text-xs	text-red-600">{hookForm.formState.errors.TypePersonType.message}</span>}
        </div>

        <hr className="my-5" />

        <div className="flex justify-end">
          <Button variant={"default"} disabled={hookForm.formState.isSubmitting}>
            <CheckIcon className="mr-2" />
            Confirmar
            {hookForm.formState.isSubmitting && <span>...</span>}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default FormPerson
