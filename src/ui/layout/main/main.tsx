import { cn } from "@/lib/utils";
import { MailQuestion } from "lucide-react";

interface MainProps extends React.ComponentProps<"main"> {
  className?: string;
}

const mainClassName = "container mx-auto px-4 pt-20 pb-8";

export function Main(props: MainProps) {
  return (
    <main className={cn(mainClassName, props.className)}>{props.children}</main>
  );
}
