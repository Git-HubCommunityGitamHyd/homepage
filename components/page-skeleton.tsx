"use client"

function SkeletonBlock({ className }: { className?: string }) {
  return <div className={`skeleton rounded-lg ${className ?? ""}`} />
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gh-border bg-white dark:bg-gh-surface p-8 flex flex-col items-center gap-4">
      <SkeletonBlock className="w-20 h-20 rounded-full" />
      <SkeletonBlock className="h-5 w-32" />
      <SkeletonBlock className="h-4 w-24" />
      <SkeletonBlock className="h-3 w-16 mt-2" />
    </div>
  )
}

function SkeletonEventCard() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gh-border bg-white dark:bg-gh-surface p-8 flex flex-col items-center gap-4 h-80">
      <SkeletonBlock className="w-16 h-16 rounded-full" />
      <SkeletonBlock className="h-5 w-40" />
      <SkeletonBlock className="h-4 w-32" />
      <SkeletonBlock className="h-4 w-28" />
      <SkeletonBlock className="h-6 w-24 rounded-full mt-auto" />
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white dark:bg-gh-bg text-gray-900 dark:text-gh-text">
      {/* Nav skeleton */}
      <div className="fixed top-0 w-full bg-white/90 dark:bg-gh-surface/90 border-b border-gray-200 dark:border-gh-border z-40 h-16 flex items-center px-8">
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SkeletonBlock className="w-8 h-8 rounded-full" />
            <SkeletonBlock className="h-5 w-48" />
          </div>
          <div className="hidden md:flex gap-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonBlock key={i} className="h-4 w-16" />
            ))}
          </div>
          <SkeletonBlock className="w-9 h-9 rounded-full" />
        </div>
      </div>

      {/* Hero skeleton */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl px-4">
          <SkeletonBlock className="w-24 h-24 rounded-full" />
          <SkeletonBlock className="h-14 w-72 md:w-96" />
          <SkeletonBlock className="h-10 w-48 md:w-64" />
          <SkeletonBlock className="h-6 w-80 md:w-full mt-2" />
          <SkeletonBlock className="h-5 w-64" />
          <div className="flex gap-4 mt-4">
            <SkeletonBlock className="h-12 w-36 rounded-xl" />
            <SkeletonBlock className="h-12 w-36 rounded-xl" />
          </div>
        </div>
      </section>

      {/* About skeleton */}
      <section className="py-20 bg-gray-50 dark:bg-gh-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 mb-16">
            <SkeletonBlock className="h-10 w-64" />
            <SkeletonBlock className="h-5 w-96" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 dark:border-gh-border bg-white dark:bg-gh-surface p-8 flex flex-col items-center gap-4">
                <SkeletonBlock className="w-12 h-12 rounded-xl" />
                <SkeletonBlock className="h-5 w-32" />
                <SkeletonBlock className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 mb-16">
            <SkeletonBlock className="h-10 w-56" />
            <SkeletonBlock className="h-5 w-72" />
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-full md:w-1/3 max-w-sm">
                <SkeletonCard />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 flex-wrap mt-8">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="w-full md:w-1/3 max-w-sm">
                <SkeletonCard />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events skeleton */}
      <section className="py-20 bg-gray-50 dark:bg-gh-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 mb-16">
            <SkeletonBlock className="h-10 w-72" />
            <SkeletonBlock className="h-5 w-64" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonEventCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
