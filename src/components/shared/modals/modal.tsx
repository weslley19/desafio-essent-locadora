import { Button } from "@/components/ui/button"
import {
  Dialog,
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
      <DialogContent className="sm:max-w-[425px] bg-container">
        <DialogHeader>{title}</DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
