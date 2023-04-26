import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, ToolTip, ToolTipProps } from "@wagner-ignite-ui/react";
import { CalendarPlus } from "phosphor-react";

export default {
  title: "Data display/ToolTip",
  component: ToolTip,
  args: {
    children: (
      <Button
        variant={"secondary"}
        size={"md"}
        children={<CalendarPlus width={32} height={32} />}
      />
    ),
    content: "Adicionar ao calendário",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "$20",
            background: "$gray500",
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<ToolTipProps>;

export const Primary: StoryObj<ToolTipProps> = {};
