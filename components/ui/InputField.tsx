"use client";

interface InputFieldProps {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
       autoComplete="on"
        className="w-full p-2 h-10 border border-borderColor rounded"
      />
    </div>
  );
}
