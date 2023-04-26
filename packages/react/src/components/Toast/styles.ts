import * as Toast from "@radix-ui/react-toast";
import { keyframes, styled } from "../../styles";

const VIEWPORT_PADDING = 25;

export const ToastProvider = styled(Toast.Provider, {});

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: "$gray800",
  boxSizing: "border-box",
  borderRadius: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "$3 $5",
  gap: "$1",
  isolation: "isolate",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },

  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastTitle = styled(Toast.Title, {
  width: "100%",
  height: "$8",
  fontWeight: "$bold",
  fontFamily: "$default",
  fontSize: "$xl",
  lineHeight: "$base",

  color: "$white",
});

export const ToastDescription = styled(Toast.Description, {
  width: "100%",
  height: 22,

  fontFamily: "$base",
  fontWeight: "$regular",
  fontSize: "$sm",
  lineHeight: "$base",

  color: "$gray200",
});

export const ToastClose = styled(Toast.Close, {
  position: "absolute",
  top: "$4",
  right: "$4",
  background: "none",
  border: "none",
  color: "$gray200",
  cursor: "pointer",
});

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  width: 360,
  height: 82,
  right: 32,
  bottom: 32,

  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  zIndex: 99999,
  outline: "none",
});

export const CloseButton = styled("button", {
  border: 0,
  outline: 0,
  cursor: "pointer",
  backgroundColor: "transparent",
  padding: 0,

  svg: {
    height: 20,
    width: 20,
    fill: "$gray200",
    color: "$gray200",
  },

  "&:hover": {
    svg: {
      color: "$gray100",
    },
  },
});
