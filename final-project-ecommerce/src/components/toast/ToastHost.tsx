import { useEffect, useState } from "react";
import "./toast.css";

type ToastItem = {
  id: string;
  message: string;
  tone: "success" | "info" | "error";
};

const ToastHost = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<{ message: string; tone?: "success" | "info" | "error" }>;
      if (!custom.detail?.message) return;
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const tone = custom.detail.tone ?? "success";
      setToasts((prev) => [...prev, { id, message: custom.detail.message, tone }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, 2500);
    };

    window.addEventListener("app-toast", handler);
    return () => window.removeEventListener("app-toast", handler);
  }, []);

  return (
    <div className='toast-host' aria-live='polite'>
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-item toast-${toast.tone}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default ToastHost;
