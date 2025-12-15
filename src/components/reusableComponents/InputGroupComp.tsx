import React from "react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "../shadcnUI/input-group";

interface IInputProps {
  placeholder?: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  type: "email" | "text" | "password";
  onClick?: () => void;
  label?: string;
  borderColor?: "green" | "blue";
  className?: string;
  validationMessage?: string;
  wrapperClassName?: string;
}

const InputGroupComp = ({
  placeholder,
  endContent,
  startContent,
  onClick,
  label,
  type,
  borderColor,
  className,
  validationMessage,
  wrapperClassName,
}: IInputProps) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      {label && <label className="md:text-base text-sm">{label}</label>}
      <InputGroup>
        {startContent && (
          <InputGroupButton onClick={onClick}>{startContent}</InputGroupButton>
        )}
        <InputGroupInput
          type={type}
          className={`${
            borderColor === "green"
              ? "focus:border-[#97BE0D] focus:ring-2 focus:ring-[#97BE0D]/60"
              : "focus:border-[#006FB7] focus:ring-2 focus:ring-[#006FB7]/60"
          } ${className}`}
          placeholder={placeholder}
        />
        {endContent && (
          <InputGroupButton onClick={onClick}>{endContent}</InputGroupButton>
        )}
      </InputGroup>
      {validationMessage && (
        <p className="absolute text-red-600 text-sm sm:text-xs">
          {validationMessage}
        </p>
      )}
    </div>
  );
};

export default InputGroupComp;
