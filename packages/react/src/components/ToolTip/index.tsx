import * as Tooltip from "@radix-ui/react-tooltip";
import { ComponentProps, ReactNode } from "react";
import { TooltipArrow, TooltipContent } from "./styles";

export interface ToolTipProps extends ComponentProps<typeof Tooltip.Root> {
  content: string | ReactNode;
}

export function ToolTip({ content, children, ...props }: ToolTipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root {...props}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

ToolTip.DisplayName = "Tooltip";
