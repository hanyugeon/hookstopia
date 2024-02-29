import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/base/Button";
import Radio from "@/components/base/Radio";

type SecondFormProps = {
  setNextStep: () => void;
  setPrevStep: () => void;
};

type FormValues = {
  sex: string;
};

const SecondForm = ({ setNextStep, setPrevStep }: SecondFormProps) => {
  const { register, handleSubmit } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      sex: "",
    },
  });

  const handleSubmitForm: SubmitHandler<FormValues> = ({ sex }) => {
    console.log(`성별: ${sex}`);
    alert(`성별: ${sex}`);

    return setNextStep();
  };

  return (
    <form>
      <Radio
        {...register("sex", { required: "성별을 선택해주세요!" })}
        title="남성"
        value="남성"
      />
      <Radio
        {...register("sex", { required: "성별을 선택해주세요!" })}
        title="여성"
        value="여성"
      />
      <Button onClick={setPrevStep}>이전으로</Button>
      <Button onClick={handleSubmit(handleSubmitForm)}>다음으로</Button>
    </form>
  );
};

export default SecondForm;
