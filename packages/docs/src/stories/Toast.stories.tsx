import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, Toast, ToastProps } from "@wagner-ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useEffect, useRef, useState } from "react";

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Próximo passo
        <ArrowRight weight="bold" />
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </>
  );
};

export default {
  title: "Data display/Toast",
  component: DemoToast,
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>;
    },
  ],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
