import { Button } from "../shadcnUI/button";

export enum ButtonTypes {
  submit = "submit",
  reset = "reset",
  button = "button",
}

export interface IButtonProps {
  name: string;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  className?: string;
  btnColor?: string;
  type?: ButtonTypes;
}

const ButtonComp = ({
  name,
  className,
  disabled,
  btnColor,
  type,
}: IButtonProps) => {
  return (
    <div>
      <Button
        type={type}
        disabled={disabled}
        className={`${className} cursor-pointer ${
          btnColor === "green" ? `bg-[#97BE0D]` : `bg-[#006FB7]`
        } `}
      >
        {name}
      </Button>
    </div>
  );
};

export default ButtonComp;
