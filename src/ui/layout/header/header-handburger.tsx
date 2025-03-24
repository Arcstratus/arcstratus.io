import { IconMenu2 } from "@tabler/icons-react";

export interface HeaderHandburgerItems {
  label: string;
  href: string;
}

interface HeaderHandburgerProps {
  items: HeaderHandburgerItems[];
}

export function HeaderHandburger(props: HeaderHandburgerProps) {
  return props.items.length === 0 ? null : <IconMenu2 />;
}
