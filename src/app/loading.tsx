export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Logo Animation */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-3xl">Q</span>
        </div>
        {/* Loading Ring */}
        <div className="absolute -inset-4">
          <div className="w-full h-full rounded-3xl border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        </div>
      </div>
    </div>
  );
}
