import { Input } from "../shadcnUI/input";

export interface IInputProps {
  validationMessage?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  wrapperClassName?: string;
}

const InputComp = ({
  validationMessage,
  placeholder,
  label,
  wrapperClassName,
  className,
}: IInputProps) => {
  return (
    <>
      <div className={`relative ${wrapperClassName}`}>
        {label && <label>{label}</label>}
        <Input placeholder={placeholder} className={className} />
        {validationMessage && (
          <p className="absolute text-red-600">{validationMessage}</p>
        )}
      </div>
    </>
  );
};

export default InputComp;
