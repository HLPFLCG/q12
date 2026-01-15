"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Error Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-500/10 rounded-full mb-8">
          <AlertCircle className="w-12 h-12 text-red-400" />
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-zinc-400 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary inline-flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            Go Home
          </Link>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-zinc-500 mb-4">
              Error Details
            </summary>
            <pre className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-xs text-red-400 overflow-auto max-h-64">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}