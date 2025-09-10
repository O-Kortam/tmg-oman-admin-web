"use client";

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({
  label,
  name,
  options,
  value,
  required,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm">{label}</label>
      <select
        name={name}
        aria-label={label}
        value={value}
        onChange={onChange}
        required={required} 
        className="w-full p-2 border border-borderColor rounded"
      >
        <option value="">{`${label}`}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
