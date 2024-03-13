import { SubmitHandler, useFormContext } from "react-hook-form";

import type { FunnelFormValues } from "@/pages/Funnel";

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";

type FirstFormProps = {
  setNextStep: () => void;
};

const FirstForm = ({ setNextStep }: FirstFormProps) => {
  const { register, handleSubmit } = useFormContext<FunnelFormValues>();

  const handleSubmitForm: SubmitHandler<FunnelFormValues> = ({ name, age }) => {
    alert(`이름: ${name}, 나이: ${age}`);

    return setNextStep();
  };

  return (
    <>
      <Input
        placeholder="이름을 입력해주세요."
        {...register("name", {
          required: "이름을 입력해주세요!",
          minLength: { value: 2, message: "2자 이상 입력해 주세요." },
        })}
      />
      <Input
        placeholder="나이를 입력해주세요."
        {...register("age", {
          required: "나이를 입력해주세요!",
          pattern: /^[0-9]*$/,
        })}
      />
      <Button onClick={handleSubmit(handleSubmitForm)}>다음으로</Button>
    </>
  );
};

export default FirstForm;
