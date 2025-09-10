"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useTranslation } from "@/lib/useTranslation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split("/")[1] === "ar" ? "ar" : "en";
  const oppositeLang = currentLang === "en" ? "ar" : "en";
  const t = useTranslation(currentLang);

  const links = [
    { href: "", label: t.nav.home },
    { href: "projects/the-residential-project", label: t.nav.sultanCity },
    { href: "projects/the-coastal-project", label: t.nav.coast },
    { href: "about", label: t.nav.about },
    { href: "register-interest", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === `/${currentLang}/${href}` ||
    (href === "" && pathname === `/${currentLang}`);

  const linkStyle = (href: string) =>
    clsx(
      "transition-colors",
      isActive(href)
        ? scrolled
          ? "text-Secondary font-bold"
          : "text-white font-bold"
        : scrolled
          ? "text-gray-700 hover:text-Dark font-medium"
          : "text-white/80 hover:text-white font-medium"
    );

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled || isOpen
          ? "bg-white border-gray-200"
          : "bg-transparent border-white/30"
      )}
    >
      <div className="w-full px-4 md:px-24  py-3 flex items-center justify-between">
        <Link href={`/${currentLang}`}>
          <Image
            src={scrolled || isOpen ? "/logo.png" : "/logo-white.png"}
            alt="Logo"
            width={256}
            height={103}
            className="h-12 w-auto object-contain transition-all duration-300"
            priority
            fetchPriority="high"
            quality={80}
            sizes="(max-width: 768px) 150px, 256px"

          />
        </Link>

        <nav className="hidden md:flex items-center w-full justify-center relative">
          <div className="flex space-x-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={`/${currentLang}/${href}`}
                className={linkStyle(href)}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href={
              pathname.replace(`/${currentLang}`, `/${oppositeLang}`) ||
              `/${oppositeLang}`
            }
            className={clsx(
              "absolute end-0",
              scrolled
                ? "text-gray-700 border-gray-300 hover:text-Dark"
                : "text-white border-white hover:text-white"
            )}
          >
            <span
              className={
                currentLang === "ar" ? "font-montserrat" : "font-cairo"
              }
            >
              {currentLang === "en" ? t.nav.arabic : t.nav.english}
            </span>
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "md:hidden",
            scrolled || isOpen ? "text-gray-700" : "text-white"
          )}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow px-4 gap-4 flex flex-col pt-8 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={`/${currentLang}/${href}`}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "block transition-colors",
                isActive(href)
                  ? "text-Secondary"
                  : "text-gray-700 hover:text-Dark"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href={
              pathname.replace(`/${currentLang}`, `/${oppositeLang}`) ||
              `/${oppositeLang}`
            }
            onClick={() => setIsOpen(false)}
            className="block w-full text-left text-gray-700 hover:text-Dark mt-2"
          >
            <span
              className={
                currentLang === "ar" ? "font-montserrat" : "font-cairo"
              }
            >
              {currentLang === "en" ? t.nav.arabic : t.nav.english}
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
