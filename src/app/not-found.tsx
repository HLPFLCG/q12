import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 */}
        <h1 className="text-[120px] md:text-[150px] font-black text-indigo-400/10 leading-none mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-zinc-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link href="/#contact" className="btn-secondary inline-flex items-center gap-2">
            <Search className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}