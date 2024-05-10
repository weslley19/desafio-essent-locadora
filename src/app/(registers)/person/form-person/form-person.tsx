import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import Loading from "@/components/shared/loading/loading"
import { useFormPerson } from "./core/hook/useFormUser"

const FormPerson = (): JSX.Element => {
  const { hookForm, onSubmit, requestEndpoint } = useFormPerson()

  return (
    <form onSubmit={hookForm.handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 mb-4">
        <Label>Nome:</Label>
        <Input {...hookForm.register('name')} />
        {hookForm.formState.errors.name && <span className="text-xs	text-red-600">{hookForm.formState.errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label>E-mail:</Label>
        <Input {...hookForm.register('email')} />
        {hookForm.formState.errors.email && <span className="text-xs	text-red-600">{hookForm.formState.errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label>Senha:</Label>
        <Input {...hookForm.register('password')} type="password" />
        {hookForm.formState.errors.password && <span className="text-xs	text-red-600">{hookForm.formState.errors.password.message}</span>}
      </div>

      <hr className="my-5" />

      <div className="flex justify-end">
        <Button variant={"default"} disabled={requestEndpoint}>
          <CheckIcon className="mr-2" />
          Confirmar
          {requestEndpoint && <Loading />}
        </Button>
      </div>
    </form>
  )
}

export default FormPerson
