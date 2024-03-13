/* eslint-disable no-constant-condition */

import { SubmitHandler, useFormContext } from "react-hook-form";

import type { FunnelFormValues } from "@/pages/Funnel";

import Button from "@/components/base/Button";
import Radio from "@/components/base/Radio";
import Input from "@/components/base/Input";

type ThirdFormProps = {
  setPrevStep: () => void;
  onSubmit: (data: FunnelFormValues) => void;
};

const RADIO_OPTIONS = [
  "무교",
  "기독교",
  "천주교",
  "불교",
  "원불교",
  "직접입력",
] as const;

const ThirdForm = ({ setPrevStep, onSubmit }: ThirdFormProps) => {
  const { register, handleSubmit, watch } = useFormContext<FunnelFormValues>();

  const isDirectInput = watch("religion");

  const handleSubmitForm: SubmitHandler<FunnelFormValues> = (
    data: FunnelFormValues
  ) => {
    data.religion === "직접입력"
      ? (alert(`종교: ${data.directInput}`), onSubmit(data))
      : (alert(`종교: ${data.religion}`), onSubmit(data));
  };

  return (
    <>
      {RADIO_OPTIONS.map((option) => (
        <Radio
          key={option}
          {...register("religion", { required: "종교를 입력해주세요!" })}
          title={option}
          value={option}
        />
      ))}
      {isDirectInput === "직접입력" && (
        <Input
          placeholder="종교를 입력해주세요."
          {...register("directInput", { required: "종교를 입력해주세요!" })}
        />
      )}
      <Button onClick={setPrevStep}>이전으로</Button>
      <Button onClick={handleSubmit(handleSubmitForm)}>제출하기</Button>
    </>
  );
};

export default ThirdForm;
