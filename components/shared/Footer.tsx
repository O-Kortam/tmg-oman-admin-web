"use client";

import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/useTranslation";
import Image from "next/image";
import Link from "next/link";


const socialLinks = [
  { name: "Facebook", href: "#", icon:"/assets/icons/facebook.svg" },
  { name: "Twitter", href: "#", icon:"/assets/icons/Twitter.svg" },
  { name: "LinkedIn", href: "#", icon:"/assets/icons/link.svg" },
  { name: "Instagram", href: "#", icon:"/assets/icons/instagram.svg" },
  { name: "YouTube", href: "#", icon:"/assets/icons/youtube.svg" }
];

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] === "ar" ? "ar" : "en";
  const t = useTranslation(currentLang);

   const links = [
    { href: "", label: t.nav.home },
    { href: "the-residential-project", label: t.nav.sultanCity },
    { href: "the-coastal-project", label: t.nav.coast },
    { href: "about", label: t.nav.about },
    { href: "register-interest", label: t.nav.contact },
  ];

  return (
    <footer className="bg-white flex flex-col items-start md:items-center z-50">
      <div className="w-full bg-Primary/10 py-12 px-4 md:px-24 flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div className="flex flex-col items-start gap-3 max-w-xs">
          <Image src="/logo.png"
             alt="Logo"
            width={256}
            height={103}
            className="h-20 w-auto"
            priority
            quality={80}
            sizes="(max-width: 768px) 103px, 200px"
          />
          <p className="text-sm text-Dark">{t.footer.aboutText}</p>
        </div>

        <nav className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 text-sm text-Dark">
          {links.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-Primary transition">
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-2">
          {socialLinks.map(({ name, href, icon }) => (
            <Link
              key={name}
              href={href}
              aria-label={name}
              className="w-10 h-10 bg-sky-950/10 flex items-center justify-center rounded hover:bg-sky-950/20 transition"
            >
              <Image
                src={icon}
                alt={name}
                className="w-5 h-5"
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full py-4 bg-Primary/20 text-center text-sm text-Dark">
        {`2025 ${t.footer.copyright}`}
      </div>
    </footer>
  );
}
