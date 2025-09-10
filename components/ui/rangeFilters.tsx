"use client";

import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

interface RangeFiltersProps {
  types: string[];
  selectedType: string;
  setSelectedType: (val: string) => void;
  bedRange: [number, number];
  setBedRange: (val: [number, number]) => void;
  bathRange: [number, number];
  setBathRange: (val: [number, number]) => void;
  areaRange: [number, number];
  setAreaRange: (val: [number, number]) => void;
}

interface DropdownSliderProps {
  title: string;
  iconSrc: string;
  value: [number, number];
  min: number;
  max: number;
  onChange: (val: [number, number]) => void;
  unit?: string;
}

function DropdownSlider({ title, iconSrc, value, min, max, onChange, unit }: DropdownSliderProps) {
  const [open, setOpen] = useState(false);
  const sliderStyles = {
    track: { backgroundColor: "#AF7E3C", height: 6 },
    handle: { borderColor: "#AF7E3C", height: 18, width: 18 },
    rail: { backgroundColor: "#d1d5db", height: 6 },
  };

  return (
    <div className="relative flex-1 md:max-w-1/6">
      <button
        className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-full border border-Secondary transition"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2 me-8">
          <Image src={iconSrc} alt="" width={20} height={20} className="w-5 h-5" />
          <span className="font-medium text-sm text-Primary">{title}</span>
        </div>
        <span className={`transform transition-transform duration-200 ${open ? "-rotate-180" : "rotate-0"} text-gray-500`}>
          <Image src="/assets/icons/arrow.svg"  alt="" width={20} height={20} className="w-5 h-5" />
        </span>
      </button>

      {open && (
        <div className="absolute z-20 bg-white p-4 mt-2 w-full rounded shadow-lg origin-bottom animate-slideUp">
          <Slider
            range
            min={min}
            max={max}
            value={value}
            onChange={(val) => onChange(val as [number, number])}
            styles={sliderStyles}
          />
          <div className="text-sm mt-2 text-gray-700">
            {value[0]} - {value[1]} {unit}
          </div>
        </div>
      )}
    </div>
  );
}

interface TypeDropdownProps {
  types: string[];
  selectedType: string;
  setSelectedType: (val: string) => void;
  iconSrc: string;
  title: string;
}

function TypeDropdown({ types, selectedType, setSelectedType, iconSrc, title }: TypeDropdownProps) {
  const [open, setOpen] = useState(false);
  const allTypes = ["All", ...types];

  return (
    <div className="relative flex-1 md:max-w-1/6">
      <button
        className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-full border border-Secondary transition"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2 me-8">
          <Image src={iconSrc}  alt="" width={20} height={20} className="w-5 h-5" />
          <span className="font-medium text-sm text-Primary">{selectedType || title}</span>
        </div>
        <span className={`transform transition-transform duration-200 ${open ? "-rotate-180" : "rotate-0"} text-gray-500`}>
          <Image src="/assets/icons/arrow.svg" alt="" width={20} height={20} className="w-5 h-5" />
        </span>
      </button>

      {open && (
        <div className="absolute z-20 bg-white mt-2 w-full rounded shadow-lg max-h-60 overflow-y-auto origin-bottom animate-slideUp">
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedType(type === "All" ? "" : type);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            >
              {type}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RangeFilters({
  types,
  selectedType,
  setSelectedType,
  bedRange,
  setBedRange,
  bathRange,
  setBathRange,
  areaRange,
  setAreaRange,
}: RangeFiltersProps) {
  const [currentLang, setCurrentLang] = useState("en");
  const [t, setT] = useState(useTranslation(currentLang));

  // Detect language change
  useEffect(() => {
    const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
    const lang = pathname.split("/")[1] === "ar" ? "ar" : "en";
    setCurrentLang(lang);
    setT(useTranslation(lang));
  }, [typeof window !== "undefined" ? window.location.pathname : "/"]);

  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4">
      <TypeDropdown
        types={t.filters.types || types}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        iconSrc="/assets/icons/finishing.svg"
        title={t.filters.selectType || "Select Type"}
      />
      <DropdownSlider
        title={t.filters.beds || "Beds"}
        iconSrc="/assets/icons/bed.svg"
        value={bedRange}
        min={0}
        max={10}
        onChange={setBedRange}
        unit={t.filters.beds || "Beds"}
      />
      <DropdownSlider
        title={t.filters.baths || "Baths"}
        iconSrc="/assets/icons/bath.svg"
        value={bathRange}
        min={0}
        max={10}
        onChange={setBathRange}
        unit={t.filters.baths || "Baths"}
      />
      <DropdownSlider
        title={t.filters.area || "Area"}
        iconSrc="/assets/icons/size.svg"
        value={areaRange}
        min={0}
        max={500}
        onChange={setAreaRange}
        unit={t.filters.areaUnit || "sqm"}
      />
    </div>
  );
}
