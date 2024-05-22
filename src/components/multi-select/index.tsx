"use client"

import {
  MultiSelector, MultiSelectorContent, MultiSelectorInput,
  MultiSelectorItem, MultiSelectorList, MultiSelectorTrigger
} from "@/components/ui/multi-select";
import { LabelAndValue } from "@/types/common";
import { useState } from "react"

interface MultiSelectProps {
  options: Array<{ id: number, value: string, label: string }>
  hookForm: any
  index: string
}

const MultiSelect = ({ hookForm, index, options }: MultiSelectProps) => {
  const [value, setValue] = useState<string[]>([])

  let actors: any[] = []

  const handleSetValue = (item: string[]) => {
    setValue(item)
    item?.map((i) => {
      const findActor = options.find(actor => actor.value === i)
      actors = [...actors, findActor?.id]
    })
    hookForm?.setValue(index, actors)
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
