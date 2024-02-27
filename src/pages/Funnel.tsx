import { SubmitHandler, useForm } from "react-hook-form";

import { useFunnel } from "@/hooks/useFunnel";

import Input from "@/components/base/Input";
import RadioButton from "@/components/base/RadioButton";
import Button from "@/components/base/Button";

type FormValues = {
  name: string;
  age: string;
  sex: string;
};

const FunnelPage = () => {
  const [Funnel, setStep] = useFunnel(["개인정보1", "개인정보2"] as const, {
    initialStep: "개인정보1",
  });
  const { register, handleSubmit } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      name: "",
      age: "",
      sex: "",
    },
  });

  const handleSubmitForm: SubmitHandler<FormValues> = ({ name, age, sex }) => {
    console.log(`이름: ${name}, 나이: ${age}, 성별: ${sex}`);
    alert(`이름: ${name}, 나이: ${age}, 성별: ${sex}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Funnel>
          <Funnel.Step name="개인정보1">
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
            <Button onClick={() => setStep("개인정보2")}>다음</Button>
          </Funnel.Step>
          <Funnel.Step name="개인정보2">
            <RadioButton {...register("sex")} value="남성" />
            <RadioButton {...register("sex")} value="여성" />
            <Button type="submit" onSubmit={handleSubmit(handleSubmitForm)}>
              완료
            </Button>
          </Funnel.Step>
        </Funnel>
      </form>
    </>
  );
};

export default FunnelPage;
