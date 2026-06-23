import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EmailGateProps {
  open: boolean;
  source: string;
  destination: string;
  title: string;
  onClose: () => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_KEY = "portfolio:lead-email";

export default function EmailGate({ open, source, destination, title, onClose }: EmailGateProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved) setEmail(saved);
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmed)) {
      setStatus("error");
      setErrorMsg("Enter a valid email.");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      window.localStorage.setItem(STORAGE_KEY, trimmed);
      window.location.href = destination;
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Try again or email brenden7@gmail.com.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="bg-white border border-gray-900 max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-gray-500 hover:text-gray-900"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Drop your email and I'll open the demo. I use this to stay in touch with people exploring my work.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                ref={inputRef}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-900"
                disabled={status === "submitting"}
              />
              {status === "error" && (
                <p className="text-xs text-red-600">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gray-900 text-white text-sm font-semibold py-2 hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? "Opening…" : "Open demo →"}
              </button>
              <p className="text-[11px] text-gray-500 text-center">
                No spam. No newsletter. Just so I know who stopped by.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
