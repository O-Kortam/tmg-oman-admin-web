"use client";

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ar from "react-phone-input-2/lang/ar.json";

interface CustomPhoneInputProps {
  label: string;
  name: string;
  value: string;
  lang?: "en" | "ar"; // pass current language from parent
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomPhoneInput({
  label,
  name,
  value,
  lang = "en",
  onChange,
}: CustomPhoneInputProps) {
  const isArabic = lang === "ar";

  return (
    <div className="flex flex-col" dir={isArabic ? "rtl" : "ltr"}>
      <label className="block mb-1 text-sm">{label}</label>
      <PhoneInput
        country={"om"}
        preferredCountries={["om", "ae", "sa", "eg"]}
        localization={isArabic ? ar : undefined}
        value={value}
        enableSearch
        inputProps={{
          name,
          required: true,
          dir: isArabic ? "rtl" : "ltr",
        }}
        onChange={(phone) =>
          onChange({
            target: { name, value: phone },
          } as React.ChangeEvent<HTMLInputElement>)
        }
        containerClass="w-full"
        inputClass={`!w-full p-2 px-8 h-10 !text-sm !border !border-gray-300 rounded-4xl focus:ring-Primary focus:border-Primary ${
          isArabic ? "text-right" : "text-left"
        }`}
        buttonClass="!border-gray-300 !rounded-l-md"
        dropdownClass="!z-50"
      />
    </div>
  );
}
