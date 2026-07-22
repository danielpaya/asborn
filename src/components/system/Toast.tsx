"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ToastProps {
  message: string | null;
  tone?: "error" | "success";
}

export function Toast({ message, tone = "error" }: ToastProps) {
  return (
    <div
      aria-live="assertive"
      role="status"
      className="fixed bottom-6 left-1/2 z-[80] w-full max-w-sm -translate-x-1/2 px-4"
    >
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className={`rounded-sm border px-4 py-3 text-sm shadow-lg backdrop-blur ${
              tone === "error"
                ? "bg-asbor-black-soft/95 border-red-400/40 text-red-200"
                : "border-asbor-gold/40 bg-asbor-black-soft/95 text-asbor-ivory"
            }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
