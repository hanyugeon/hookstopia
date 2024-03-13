import { FormProvider, useForm } from "react-hook-form";

import { useFunnel } from "@/hooks/useFunnel";

import FirstForm from "@/components/Funnel/FirstForm";
import SecondForm from "@/components/Funnel/SecondForm";
import ThirdForm from "@/components/Funnel/ThirdForm";
import { useNavigate } from "react-router";

export type FunnelFormValues = {
  name: string;
  age: string;
  sex: string;
  religion: string;
  directInput: string;
};

const FunnelPage = () => {
  const navigate = useNavigate();

  const [Funnel, setStep] = useFunnel(
    ["개인정보1", "개인정보2", "개인정보3"] as const,
    {
      initialStep: "개인정보1",
    }
  );

  const methods = useForm<FunnelFormValues>({
    mode: "all",
    defaultValues: {
      name: "",
      age: "",
      sex: "",
      religion: "",
      directInput: "",
    },
  });

  const handleSubmitFunnelForm = ({
    name,
    age,
    sex,
    religion,
    directInput,
  }: FunnelFormValues) => {
    religion !== "직접입력"
      ? alert(`최종 제출: ${name}, ${age}, ${sex}, ${religion}`)
      : alert(`최종 제출: ${name}, ${age}, ${sex}, ${directInput}`);

    return navigate("/");
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Funnel>
          <Funnel.Step name="개인정보1">
            <FirstForm setNextStep={() => setStep("개인정보2")} />
          </Funnel.Step>
          <Funnel.Step name="개인정보2">
            <SecondForm
              setNextStep={() => setStep("개인정보3")}
              setPrevStep={() => setStep("개인정보1")}
            />
          </Funnel.Step>
          <Funnel.Step name="개인정보3">
            <ThirdForm
              setPrevStep={() => setStep("개인정보2")}
              onSubmit={handleSubmitFunnelForm}
            />
          </Funnel.Step>
        </Funnel>
      </form>
    </FormProvider>
  );
};

export default FunnelPage;
