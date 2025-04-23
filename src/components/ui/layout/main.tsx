"use client";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <div className="relative w-full container mx-auto">{children}</div>
    </main>
  );
}
