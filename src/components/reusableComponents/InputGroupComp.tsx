import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../shadcnUI/input-group";

interface IInputProps {
  placeholder?: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  type: string;
  onClick?: () => void;
  label?: string;
  borderColor?: "green" | "blue";
  className?: string;
  validationMessage?: string;
  wrapperClassName?: string;
  props?: any;
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
  props,
}: IInputProps) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      {label && <label>{label}</label>}
      <InputGroup>
        {startContent && (
          <InputGroupButton onClick={onClick}>{startContent}</InputGroupButton>
        )}
        <InputGroupInput
          type={type}
          {...props}
          className={`${
            borderColor === "green"
              ? "focus:border-[#97BE0D] focus:ring-2 focus:ring-[#97BE0D]/60 focus:outline-none"
              : "focus:border-[#006FB7] focus:ring-2 focus:ring-[#006FB7]/60 focus:outline-none"
          } ${className}`}
          {...props}
          placeholder={placeholder}
        />
        {endContent && (
          <InputGroupButton onClick={onClick}>{endContent}</InputGroupButton>
        )}
      </InputGroup>
      {validationMessage && (
        <p className="absolute text-red-600">{validationMessage}</p>
      )}
    </div>
  );
};

export default InputGroupComp;
