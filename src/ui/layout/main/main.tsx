import { cn } from "@/lib/utils";
import { MainBreadcrumb } from "./main-breadcrumb";

interface MainProps extends React.ComponentProps<"main"> {
  className?: string;
  breadcrumb?: boolean;
}

const mainClassName = "pt-16 pb-8 overflow-y-auto";

export const Main = (props: MainProps) => {
  return (
    <main className={cn(mainClassName, props.className)}>
      {props?.breadcrumb && <MainBreadcrumb />}
      {props.children}
    </main>
  );
};
