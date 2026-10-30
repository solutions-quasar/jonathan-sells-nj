"use client";

import React from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface ToastState {
  show: boolean;
  type: "success" | "error" | "info";
  message: string;
}

interface NotificationToastProps {
  toast: ToastState;
  onClose: () => void;
}

export function NotificationToast({ toast, onClose }: NotificationToastProps) {
  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 max-w-md w-[calc(100vw-2rem)] p-4 rounded-xl shadow-2xl border backdrop-blur-md bg-[#161515]/95 text-[#F6F3ED] border-[#481F25]/40"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 pr-2">
              <p className="text-sm font-medium leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={onClose}
              className="text-[#D8D3CB] hover:text-white transition-colors p-1 -mr-1 -mt-1 rounded-md"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
