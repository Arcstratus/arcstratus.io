import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export function HeaderBrand() {
  return (
    <Link href="/" className="rounded" aria-label="Arcstratus Homepage">
      <div className="w-10 h-10 overflow-hidden rounded-md relative">
        <Image src={logo} alt="logo" fill className="object-cover" priority />
      </div>
    </Link>
  );
}
