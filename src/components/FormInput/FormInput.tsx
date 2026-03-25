import React from "react";
import style from "./FormInput.module.css";
import Stack from "../Stack/Stack";

export type FormInputProps = {
  icon?: React.ReactElement<{ size?: number; color?: string }>;
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  hideLabel?: boolean;
};

const FormInput = ({
  icon,
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
  required = false,
  error,
  hideLabel = false,
}: FormInputProps) => (
  <Stack gap={8}>
    {hideLabel === false && (
      <label htmlFor={id} style={{ display: "flex", gap: "4px" }}>
        <div
          className="text-md-regular"
          style={disabled ? { color: "var(--color-gray-800)" } : undefined}
        >
          {label}
        </div>
        {required && <span aria-hidden="true"> *</span>}
      </label>
    )}
    <div
      className={`${style.inputContainer} ${
        error ? style.formErrorIndicator : ""
      }`}
    >
      {icon && (
        <>
          {React.cloneElement(icon, {
            size: 18,
            color: "var(--color-gray-800)",
          })}
        </>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`text-md-regular ${style.formInput}`}
      />
    </div>
    {error && (
      <p className={`${style.formErrorMessage} text-xs-regular`}>{error}</p>
    )}
  </Stack>
);

export { FormInput };
export default FormInput;
