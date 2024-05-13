import * as React from "react"

import {
  Select as SelectReact,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement>{
  children: React.ReactNode
  hookForm: any
  index: string
}

const Select = ({ children, hookForm, index }: SelectProps) => {
  return (
    <SelectReact onValueChange={(e) => { hookForm?.setValue(index, e) }}>
      <SelectTrigger className="min-w-[180px]">
        <SelectValue placeholder="Selecione" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {children}
        </SelectGroup>
      </SelectContent>
    </SelectReact>
  )
}

export default Select
