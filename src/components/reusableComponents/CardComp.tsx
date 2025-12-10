import { Card } from "../shadcnUI/card";

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const CardComp = ({ children, className }: ICardProps) => {
  return (
    <Card className={`max-w-md border-t-[#97BE0D] border-t-6 ${className}`}>
      {children}
    </Card>
  );
};

export default CardComp;
