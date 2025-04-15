import Link from "next/link";

interface FooterSectionItem {
  label: string;
  link: string;
}

interface FooterSectionProps {
  title: string;
  items: FooterSectionItem[];
}

export const FooterSection = ({ title, items }: FooterSectionProps) => {
  return (
    <section className="h-full">
      <hgroup className="py-2">
        <h1 className="text-xl font-bold">{title}</h1>
      </hgroup>
      <menu className="text-foreground/70">
        {items.map((item) => (
          <li key={item.label} className="py-1">
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </menu>
    </section>
  );
};
