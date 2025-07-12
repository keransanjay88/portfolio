"use client";

export default function ProjectLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      <main className="flex-1 w-full flex flex-col items-center">
        <div className="fixed top-0 left-0 w-full flex justify-start z-50 p-6 pointer-events-none">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-white/80 hover:text-pink-400 transition-colors font-medium rounded-full px-4 py-2 bg-white/10 hover:bg-pink-400/10 shadow-lg backdrop-blur-md border border-white/10 pointer-events-auto"
            style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
        <div className="w-full max-w-3xl mx-auto px-4 py-16">{children}</div>
      </main>
    </div>
  );
}
