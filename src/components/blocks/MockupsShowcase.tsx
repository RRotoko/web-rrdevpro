export default function MockupsShowcase() {
  return (
    <div className="relative flex items-end justify-center gap-6 py-12">
      {/* Desktop mockup */}
      <div className="hidden w-full max-w-lg sm:block">
        <div className="border-border bg-surface-secondary rounded-t-xl border p-2">
          {/* Browser bar */}
          <div className="mb-2 flex items-center gap-1.5 px-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <div className="bg-border-light ml-3 h-5 flex-1 rounded" />
          </div>
          {/* Screen content placeholder */}
          <div className="from-accent/5 to-primary/5 flex h-56 items-center justify-center rounded-b-lg bg-gradient-to-br lg:h-72">
            <div className="text-text-muted flex flex-col items-center gap-3">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">Desktop Preview</span>
            </div>
          </div>
        </div>
        {/* Stand */}
        <div className="bg-border-light mx-auto h-4 w-24" />
        <div className="bg-border mx-auto h-2 w-32 rounded-b-lg" />
      </div>

      {/* Phone mockup */}
      <div className="w-36 sm:absolute sm:right-8 sm:bottom-8 lg:right-16">
        <div className="border-primary bg-surface rounded-[1.5rem] border-4 p-1.5 shadow-lg">
          {/* Notch */}
          <div className="bg-primary mx-auto mb-1 h-4 w-16 rounded-full" />
          {/* Screen */}
          <div className="from-accent/5 to-primary/5 flex h-60 items-center justify-center rounded-2xl bg-gradient-to-br">
            <div className="text-text-muted flex flex-col items-center gap-2">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs">Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
