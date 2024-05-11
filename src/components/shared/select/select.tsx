import * as React from "react"

import {
  Select as SelectReact,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement>{
  children: React.ReactNode
}

const Select = ({ children }: SelectProps) => {
  return (
    <SelectReact>
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
