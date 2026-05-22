"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Replaces the root layout when an error occurs there — must include <html> and <body>.
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[Global Error]", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, Arial, sans-serif", background: "#f9fafb" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div style={{ maxWidth: 380, width: "100%", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: 40, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: "#fef2f2", border: "1px solid #fecaca", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AlertTriangle size={32} color="#dc2626" />
            </div>

            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>
                Application error
              </h1>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>
                A critical error occurred and the page could not be loaded. Please try reloading.
              </p>
              {error.digest && (
                <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 12, fontFamily: "monospace", background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 8, padding: "6px 12px" }}>
                  Error ID: {error.digest}
                </p>
              )}
            </div>

            <button
              onClick={reset}
              style={{ width: "100%", height: 44, borderRadius: 12, background: "#4f39c7", color: "#fff", fontSize: 14, fontWeight: 700, border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}
            >
              <RefreshCcw size={16} />
              Reload page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
