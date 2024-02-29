/* eslint-disable no-constant-condition */

import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/base/Button";
import Radio from "@/components/base/Radio";
import Input from "@/components/base/Input";

type ThirdFormProps = {
  setPrevStep: () => void;
};

type FormValues = {
  religion: string;
  directInput: string;
};

const ThirdForm = ({ setPrevStep }: ThirdFormProps) => {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      religion: "",
      directInput: "",
    },
  });

  const isDirectInput = watch("religion");

  const handleSubmitForm: SubmitHandler<FormValues> = (data: FormValues) => {
    if (data.religion === "직접입력") {
      console.log(`종교: ${data.directInput}`);
      alert(`종교: ${data.directInput}`);
      return;
    }

    console.log(`종교: ${data.religion}`);
    alert(`종교: ${data.religion}`);
    return;
  };

  return (
    <form>
      <Radio
        {...register("religion", { required: "종교를 입력해주세요!" })}
        title="무교"
        value="무교"
      />
      <Radio
        {...register("religion", { required: "종교를 입력해주세요!" })}
        title="기독교"
        value="기독교"
      />
      <Radio
        {...register("religion", { required: "종교를 입력해주세요!" })}
        title="천주교"
        value="천주교"
      />
      <Radio
        {...register("religion", { required: "종교를 입력해주세요!" })}
        title="불교"
        value="불교"
      />
      <Radio
        {...register("religion", { required: "종교를 입력해주세요!" })}
        title="원불교"
        value="원불교"
      />
      <Radio
        {...register("religion", { required: "종교를 입력해주세요!" })}
        title="직접입력"
        value="직접입력"
      />
      {isDirectInput === "직접입력" && (
        <Input
          placeholder="종교를 입력해주세요."
          {...register("directInput", { required: "종교를 입력해주세요!" })}
        />
      )}
      <Button onClick={setPrevStep}>이전으로</Button>
      <Button onClick={handleSubmit(handleSubmitForm)}>제출하기</Button>
    </form>
  );
};

export default ThirdForm;
