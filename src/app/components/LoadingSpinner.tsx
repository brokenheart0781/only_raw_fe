export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-slate-100 border-t-indigo-600 rounded-full animate-spin" style={{ animationDuration: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );
}
