"use client"
import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/useTranslation";

export default function ThankYouPage() {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] === "ar" ? "ar" : "en";
  const t = useTranslation(currentLang);

  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center p-8 bg-Primary">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          {t.contact.submitted}
        </h1>
        <p className="text-gray-700 mb-6 text-white">{t.contact.successMessage}</p>
        <a
          href={`/${currentLang}/register-interest`}
          className="bg-Secondary text-white px-6 py-3 rounded font-semibold"
        >
          {t.contact.submitAgain}
        </a>
      </div>
    </section>
  );
}
