import { useState } from "react";
import { ToastOptions, toast } from "react-toastify";

type ToastType = {
  id: string; // Unique ID for each toast
  title?: string;
  description?: string;
  action?: React.ReactNode;
  options?: ToastOptions;
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const showToast = (
    message: string,
    type: "success" | "error" | "info" | "warning" = "info",
    options: ToastOptions = {}
  ) => {
    const id = `${Date.now()}`; // Generate unique ID
    const newToast: ToastType = {
      id,
      title: type.charAt(0).toUpperCase() + type.slice(1), // Default title based on type
      description: message,
      options,
    };

    setToasts((prev) => [...prev, newToast]);

    // Automatically dismiss the toast after timeout
    toast(message, {
      ...options,
      onClose: () => dismissToast(id),
      type,
    });
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    showToast,
    dismissToast,
  };
};
