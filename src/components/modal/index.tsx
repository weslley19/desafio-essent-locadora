"use client"

import { PropsWithChildren } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ModalPros {
  title?: string
  labelButton?: string
  open?: boolean
  onClose?: () => void
}

export default function Modal({ title, labelButton, open, onClose, children }: PropsWithChildren<ModalPros>) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild>
        {labelButton && <Button>{labelButton}</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
