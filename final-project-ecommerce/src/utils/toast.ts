export type ToastPayload = {
  message: string;
  tone?: "success" | "info" | "error";
};

export const emitToast = (payload: ToastPayload) => {
  window.dispatchEvent(new CustomEvent<ToastPayload>("app-toast", { detail: payload }));
};
