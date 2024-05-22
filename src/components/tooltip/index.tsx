import {
  Tooltip as ReactTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PropsWithChildren } from "react"

interface TooltipProps {
  message: string
}

export default function Tooltip({ message, children }: PropsWithChildren<TooltipProps>) {
  return (
    <>
      <TooltipProvider>
        <ReactTooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent className="bg-background">
            <p>{message}</p>
          </TooltipContent>
        </ReactTooltip>
      </TooltipProvider>
    </>
  )
}
