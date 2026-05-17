// app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="container flex items-center justify-between py-4">
      <Link href="/" id="logo">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          loading="eager"
          placeholder="empty"
        />
      </Link>
      <nav className="flex items-center gap-4">
        TheClosedBox&apos;s Game Utilities
      </nav>
      <nav className="flex items-center gap-4">
        <Link href="/pokemmo-utilities">PokeMMO Utilities</Link>
      </nav>
    </div>
  );
}
