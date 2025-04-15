import { cn } from "@/lib/utils";

interface MainProps {
  children: React.ReactNode;
  fluid?: boolean;
}

export const Main = ({ children, fluid }: MainProps) => {
  return (
    <main className="relative mt-4">
      <div
        className={cn("space-y-4 p-4", fluid ? "w-full" : "container mx-auto")}
      >
        {children}
      </div>
    </main>
  );
};
