import Register from "@/components/contact/Register";
import Hotline from "@/components/contact/Hotline";
import Faq from "@/components/contact/Faq";
import Hero from "@/components/about/Hero";
import Branches from "@/components/contact/Branches";
import {
  getContactPageData,
  getContactbranchesData,
  getContacthotlineData,
  getContactfaqData,
} from "@/services/getContactPageData";
import { getContactDropdowns } from "@/services/getContact";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const contactData = await getContactPageData(lang);
  const contactHotlineData = await getContacthotlineData(lang);
  const contactFaqData = await getContactfaqData(lang);
  const contactbranchesData = await getContactbranchesData(lang);
  const contactDropdowns = await getContactDropdowns(lang);

  return (
    <main className="flex flex-col w-full">
      <Hero data={contactData?.header} />
      <Branches data={contactbranchesData?.branches} />
      <Register data={contactDropdowns} />
      <Hotline data={contactHotlineData?.hotline} />
      <Faq data={contactFaqData?.faq} />
    </main>
  );
}
