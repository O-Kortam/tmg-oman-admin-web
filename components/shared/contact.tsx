"use client";

import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/useTranslation";
import { ContactFormData } from "@/types/shared";
import { useState, useEffect } from "react";
import { postContact } from "@/services/postContact";
import FadeIn from "@/components/animation/fadeIn";
import { postContactC4C } from "@/services/postContactC4C";
import { useRouter } from "next/navigation";
import CustomPhoneInput from "@/components/ui/PhoneInput";
import Image from "next/image";

export default function ContactUs({
  data,
  defaultProject,
}: {
  data: any;
  defaultProject?: string;
}) {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] === "ar" ? "ar" : "en";
  const t = useTranslation(currentLang);
  const router = useRouter();

  const reasons = t.contact.reasons;
  const projects = t.contact.projects;
  const countries = data.country.country;

  const projectSlugMap: Record<string, string> = {
    "the-residential-project": projects[0],
    "the-coastal-project": projects[1],
  };

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    reason: reasons[0] || "",
    country: "",
    interested: "",
    project: defaultProject || "",
    message: "",
  });

  useEffect(() => {
    if (defaultProject && projectSlugMap[defaultProject]) {
      setFormData((prev) => ({
        ...prev,
        interested: projectSlugMap[defaultProject],
        project: defaultProject,
      }));
    }
  }, [defaultProject]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "interested") {
        const slug = Object.keys(projectSlugMap).find(
          (key) => projectSlugMap[key] === value
        );
        return { ...prev, interested: value, project: slug || "" };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const reason = formData.reason?.toString().trim();
      const firstReason = reasons[0]?.toString().trim();

      if (reason === firstReason) {
        await postContactC4C(formData);
      } else {
        await postContact(formData);
      }



      router.push(`/thank-you`);
    } catch (error) {
      console.error(error);
      alert(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 py-16 md:p-24 bg-white border-b border-offWhite text-Dark">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full h-full">
        <FadeIn
          delay={0.1}

        >
          <div className="relative flex-3 rounded-lg overflow-hidden h-64 md:h-full w-full">
            <Image
              src="https://tmg-oman-strapi-dev.nuca-mycluster-eu-de-1-cx-5fc3035946e1f798c7284cb63267e8d1-0000.eu-de.containers.appdomain.cloud/uploads/28328797_976667951e.jpg"
              alt="Contact background"
              width={500}
              height={500}
              className="object-cover z-0 w-full h-full"
            />

            <div className="absolute inset-0 bg-sky-950/80"></div>

            <div className="absolute z-40 inset-0 flex items-end justify-start h-full p-8">
              <FadeIn
                delay={0.3}
              >
                <h2 className="text-3xl md:text-5xl font-semibold text-white text-start"
                >{t.contact.title}</h2>
              </FadeIn>
            </div>
          </div>
        </FadeIn>


        <form
          onSubmit={handleSubmit}
          className="flex-4 flex flex-col gap-4 text-sm mx-auto w-full"
        >
          <div>
            <FadeIn delay={0.1} >
              <p className="font-semibold">{t.contact.heading}</p>
            </FadeIn>
            <FadeIn
              delay={0.2}
            >
              <h3 className="text-Primary text-xl md:text-3xl font-semibold"
              >{t.contact.subheading}</h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FadeIn delay={0.4}>
              <SelectField
                label={t.contact.reason}
                options={reasons}
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              />
            </FadeIn>

            <div>
              {formData.reason === reasons[0] && (
                <FadeIn delay={0.1}>
                  <SelectField
                    label={t.contact.project}
                    options={projects}
                    name="interested"
                    value={formData.interested}
                    onChange={handleChange}
                    required={true}
                  />
                </FadeIn>
              )}
            </div>

            <FadeIn delay={0.1}>
              <InputField
                label={t.contact.name}
                placeholder={t.contact.name}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <CustomPhoneInput
                label={t.contact.phone}
                name="phone"
                value={formData.phone}
                lang={currentLang}
                onChange={handleChange}
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <InputField
                label={t.contact.email}
                placeholder={t.contact.email}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FadeIn>

            <FadeIn delay={0.5}>
              <SelectField
                label={t.contact.country}
                options={countries}
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.7}>
            <label className="block mb-1 text-sm">{t.contact.message}</label>
            <textarea
              name="message"
              placeholder={t.contact.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-borderColor rounded"
            />
          </FadeIn>

          <FadeIn
            delay={0.8}
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full text-center mt-2 bg-Primary text-white py-3 rounded font-semibold"
            >
              {loading
                ? t.contact.submitting
                : submitted
                  ? t.contact.submitted
                  : t.contact.submit}
            </button>
          </FadeIn>
        </form>
      </div>
    </section>
  );
}
