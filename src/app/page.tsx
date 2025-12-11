import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import Login from "./login/page";
import InputGroupComp from "@/components/reusableComponents/InputGroupComp";
// import { EyeIcon, EyeClosed } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 items-center mt-10">
      <Login />
    </div>
  );
}
