"use client";

import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import { ContactFormData, ContactDropdownsResponse } from "@/types/contact";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/useTranslation";
import { postContact } from "@/services/postContact";
import FadeIn from "@/components/animation/fadeIn";
import { useState, useEffect } from "react";
import { postContactC4C } from "@/services/postContactC4C";
import { useRouter } from "next/navigation";
import CustomPhoneInput from "@/components/ui/PhoneInput";


export default function Register({ data }: { data: ContactDropdownsResponse }) {
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
    project: "",
    message: "",
  });




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
    <section className="w-full px-4 md:px-24 py-16 bg-white border-b border-offWhite text-Dark">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="flex-4 flex flex-col gap-4 text-sm mx-auto w-full"
        >
          <div className="text-center mb-6">
            <FadeIn delay={0.2}>
              <h3  className="font-semibold text-base text-Dark">
                {t.contact.subheading}
              </h3>
            </FadeIn>
            <FadeIn delay={0.2} >
              <p className="text-Primary text-xl md:text-5xl font-semibold">
                {t.contact.title}
              </p>
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
