import React from 'react';
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from '../shadcnUI/input-group';

interface IInputProps {
  placeholder?: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  type: 'email' | 'text' | 'password';
  onClick?: () => void;
  label?: string;
  borderColor?: 'green' | 'blue';
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
  ...rest
}: IInputProps) => {
  return (
    <div className={`relative ${wrapperClassName} `}>
      {label && <label className="text-sm text-gray-700">{label}</label>}
      <InputGroup
        className={`mb-1 rounded-md focus-visible:ring-2 focus-visible:ring-offset-0 ${
          !validationMessage
            ? 'focus-visible:border-[#97BE0D] focus-visible:ring-[#97BE0D]/60'
            : 'focus-visible:border-red-500 focus-visible:ring-red-500/60'
        }`}
      >
        {startContent && (
          <InputGroupButton onClick={onClick}>{startContent}</InputGroupButton>
        )}
        <InputGroupInput
          type={type}
          className={`z-20 rounded-md ${className} text-xs md:text-sm`}
          {...rest}
          placeholder={placeholder}
        />
        {endContent && (
          <InputGroupButton className="z-50" onClick={onClick}>
            {endContent}
          </InputGroupButton>
        )}
      </InputGroup>

      {validationMessage && (
        <p className="absolute text-xs text-red-600">{validationMessage}</p>
      )}
    </div>
  );
};

export default InputGroupComp;
