import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"
import {
  toast as sonnerToast,
  ToastT,
  Renderable,
  ValueOrFunction,
} from "sonner"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastT & {
  id: string
  title?: string
  description?: string
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0
let toasts: ToasterToast[] = []

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export function toast(props: Omit<ToasterToast, "id">) {
  const id = genId()
  const newToast = {
    ...props,
    id,
    open: true,
    onOpenChange: (open: boolean) => {
      if (!open) dismiss(id)
    },
  }
  
  toasts = [...toasts, newToast]

  const update = (props: ToasterToast) => {
    toasts = toasts.map(t => t.id === id ? { ...t, ...props } : t)
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  }
  
  const dismiss = () => {
    toasts = toasts.filter(t => t.id !== id)
    dispatch({ type: "DISMISS_TOAST", toastId: id })
  }

  dispatch({
    type: "ADD_TOAST",
    toast: newToast,
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function dispatch(action: Action) {
  sonnerToast[action.type === "ADD_TOAST" ? "success" : "error"](
    action.toast?.title as Renderable,
    {
      description: action.toast?.description as ValueOrFunction<Renderable>,
    }
  )
}

export function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        toasts = toasts.filter(t => t.id !== toastId)
      }
      dispatch({ type: "DISMISS_TOAST", toastId })
    },
    toasts,
  }
}