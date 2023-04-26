import { ComponentProps, useState, useRef, useEffect } from "react";
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "./styles";
import { X } from "phosphor-react";
import { Text } from "../Text";

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string;
  description?: string;
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>
          <Text>{description}</Text>
        </ToastDescription>
        <ToastClose>
          <X width={11} height={11} />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  );
}

Toast.displayName = "Toast";
