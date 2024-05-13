"use client"

import {
  MultiSelector, MultiSelectorContent, MultiSelectorInput,
  MultiSelectorItem, MultiSelectorList, MultiSelectorTrigger
} from "@/components/ui/multi-select";
import { LabelAndValues } from "@/types/common";
import { useState } from "react"

interface MultiSelectProps {
  options: LabelAndValues[]
  hookForm: any
  index: string
}

const MultiSelect = ({ hookForm, index, options }: MultiSelectProps) => {
  const [value, setValue] = useState<string[]>([])

  const handleSetValue = (item: string[]) => {
    setValue(item)
    hookForm?.setValue(index, item)
  }

  return (
    <MultiSelector values={value} onValuesChange={handleSetValue} loop={false}>
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Selecione" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {options?.map((option, i) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
};

export default MultiSelect
