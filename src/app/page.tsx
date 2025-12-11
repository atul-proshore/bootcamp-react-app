import ButtonComp from "@/components/reusableComponents/ButtonComp";
import CardComp from "@/components/reusableComponents/CardComp";
import InputComp from "@/components/reusableComponents/InputComp";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <ButtonComp name="This is a button" />
      <CardComp className="flex justify-center items-center">
        <p className="font-semibold ">This is header</p>
        This is card body
      </CardComp>
      <InputComp
        className=""
        // label="label"
        placeholder="placeholder text"
        // validationMessage="this is validation text"
      />
      <InputComp
        className=""
        placeholder="placeholder text"
        validationMessage="this is validation text"
      />
    </div>
  );
}
