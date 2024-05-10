import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ModalProps {
  title: string
  labelButton: string
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const Modal = ({ title, labelButton, children, open, onClose }: ModalProps): JSX.Element => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="default">{labelButton}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>{title}</DialogHeader>
        {children}
        <DialogClose className="mt-5">
          <Button type="button" variant="destructive">
            Fechar
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
