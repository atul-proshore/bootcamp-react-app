import { Button } from "../shadcnUI/button";

// enum ButtonTypes {
//   submit = "submit",
//   reset = "reset",
//   button = "button",
//   // undefined = "undefined"
// }

export interface IButtonProps {
  name: string;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  className?: string;
  btnColor?: string;
  type?: "submit" | "button" | "reset";
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
        className={`${className} transition-colors duration-100 ease-linear cursor-pointer  ${
          btnColor === "green"
            ? `bg-[#97BE0D] hover:bg-[#86A80E]`
            : `bg-[#006FB7] hover:bg-[#005C98]`
        } `}
      >
        {name}
      </Button>
    </div>
  );
};

export default ButtonComp;
