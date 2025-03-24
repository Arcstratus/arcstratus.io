import { Menu } from "lucide-react";

export interface HeaderHandburgerItems {
  label: string;
  href: string;
}

interface HeaderHandburgerProps {
  items: HeaderHandburgerItems[];
}

export function HeaderHandburger(props: HeaderHandburgerProps) {
  return props.items.length === 0 ? null : <Menu />;
}
