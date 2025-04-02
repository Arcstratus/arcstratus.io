export async function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-dvh w-full overflow-hidden">
      <div className="container mx-auto space-y-8 p-4">{children}</div>
    </main>
  );
}
