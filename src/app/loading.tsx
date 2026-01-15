import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl mb-6 animate-pulse">
          <span className="text-4xl font-black text-white">Q</span>
        </div>

        {/* Loading Indicator */}
        <div className="flex items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
          <p className="text-zinc-400">Loading...</p>
        </div>
      </div>
    </div>
  );
}