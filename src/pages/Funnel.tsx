import { useFunnel } from "@/hooks/useFunnel";

import FirstForm from "@/components/Funnel/FirstForm";
import SecondForm from "@/components/Funnel/SecondForm";
import ThirdForm from "@/components/Funnel/ThirdForm";

const FunnelPage = () => {
  const [Funnel, setStep] = useFunnel(
    ["개인정보1", "개인정보2", "개인정보3"] as const,
    {
      initialStep: "개인정보1",
    }
  );

  return (
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
        <ThirdForm setPrevStep={() => setStep("개인정보2")} />
      </Funnel.Step>
    </Funnel>
  );
};

export default FunnelPage;
