"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import { useRented } from "../../core/hook/useRented"
import { useFormRented } from "./core/hook/useFormRented"
import Modal from "@/components/modal"
import Select from "@/components/select"
import { LabelAndValue } from "@/types/common"
import { Person } from "@/types/person"
import { Movie } from "@/types/movie"

interface FormRentedProps {
  locadores: Person[]
  movies: Movie[]
}

const FormRented = ({ locadores, movies }: FormRentedProps): JSX.Element => {
  const { hookForm, onSubmit, handleCalculateTotal, handleGetValueMovie } = useFormRented()

  const clients = locadores?.filter(person => person?.TypePersonType?.some(type => type.typePersonId === 1))

  return (
    <Modal
      title="Novo aluguel"
      labelButton="Adicionar aluguel"
    >
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <Label>Locador:</Label>
          <Select
            {...hookForm.register('renterId')}
            options={clients?.map((locador) => (
              { label: locador.name, value: locador.id.toString() }
            ))}
            onChange={(event) => { hookForm.setValue('renterId', event.value) }}
          />
          {hookForm.formState.errors.renterId && <span className="text-xs	text-red-600">{hookForm.formState.errors.renterId.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Filme:</Label>
          <Select
            {...hookForm.register('movieId')}
            options={movies.map((movie) => (
              { label: movie.title, value: movie.id.toString() }
            ))}
            onChange={(event) => {
              handleGetValueMovie(
                movies.find((movie) => movie.id === Number(event.value)) as Movie
              );
              hookForm.setValue('movieId', event.value);
            }}
          />
          {hookForm.formState.errors.movieId && <span className="text-xs	text-red-600">{hookForm.formState.errors.movieId.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Retirada:</Label>
          <Input {...hookForm.register('rentalDate')} type="datetime-local" />
          {hookForm.formState.errors.rentalDate && <span className="text-xs	text-red-600">{hookForm.formState.errors.rentalDate.message}</span>}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <Label>Devolução:</Label>
          <Input
            {...hookForm.register('returnDate')}
            onChange={(event) => {
              hookForm.setValue('returnDate', event.target.value)
              handleCalculateTotal()
            }}
            type="datetime-local"
          />
          {hookForm.formState.errors.returnDate && <span className="text-xs	text-red-600">{hookForm.formState.errors.returnDate.message}</span>}
        </div>

        <div className="flex gap-3 mb-4">
          <div className="flex flex-col gap-2 w-full">
            <Label>Total:</Label>
            <Input {...hookForm.register('totalAmount')} />
            {hookForm.formState.errors.totalAmount && <span className="text-xs	text-red-600">{hookForm.formState.errors.totalAmount.message}</span>}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label>Situação:</Label>
            <Select
              {...hookForm.register('status')}
              options={[
                { label: 'alugado', value: 'Alugado' },
                { label: 'atrasado', value: 'Atrasado' },
                { label: 'entregue', value: 'Entregue' },
              ]}
              onChange={(event) => { hookForm.setValue('status', event.value) }}
            />
            {hookForm.formState.errors.status && <span className="text-xs	text-red-600">{hookForm.formState.errors.status.message}</span>}
          </div>
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

export default FormRented
