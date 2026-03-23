import React from "react";

interface InputProps {
  width: "sm" | "md" | "lg";
  height: "sm" | "md" | "lg";
  placeholder: string;
  reference?: React.Ref<HTMLInputElement>;
}

const widthClass = {
  sm: "w-16",
  md: "w-20",
  lg: "w-44",
};

const heightClass = {
  sm: "h-9",
  md: "h-12",
  lg: "h-16",
};

const defaultClass = " m-2 p-2 border border-gray-500";

function InputComponents({
  height,
  width,
  reference,
  placeholder,
}: InputProps) {
  return (
    <input
      ref={reference}
      placeholder={placeholder}
      className={`${widthClass[width]} ${heightClass[height]} ${defaultClass}`}
    />
  );
}

export default InputComponents;
