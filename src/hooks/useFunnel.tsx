/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import type { FunnelProps, StepProps } from "@/components/Funnel/Funnel";
import { assert } from "@/utils/assert";

import { Funnel, Step } from "@/components/Funnel/Funnel";

export type NonEmptyArray<T> = readonly [T, ...T[]];

type SetStepOptions = {
  stepChangeType?: "push" | "replace";
  preserveQuery?: boolean;
  query?: Record<string, any>;
};

type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  FunnelProps<Steps>,
  "steps" | "step"
>;

type FunnelComponent<Steps extends NonEmptyArray<string>> = ((
  props: RouteFunnelProps<Steps>
) => JSX.Element) & {
  Step: (props: StepProps<Steps>) => JSX.Element;
};

const DEFAULT_STEP_QUERY_KEY = "funnel-step";

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  options?: {
    stepQueryKey?: string;
    initialStep?: Steps[number];
    onStepChange?: (name: Steps[number]) => void;
  }
): readonly [
  FunnelComponent<Steps>,
  (step: Steps[number], options?: SetStepOptions) => void
] => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const step = searchParams.get("funnel-step") as unknown as string;
  const stepQueryKey = options?.stepQueryKey ?? DEFAULT_STEP_QUERY_KEY;

  useEffect(() => {
    if (options?.initialStep) {
      navigate({ pathname: location.pathname });
    }
  }, []);

  assert(steps.length > 0, "steps가 비어있습니다.");

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function RouteFunnel(props: RouteFunnelProps<Steps>) {
          const step =
            (searchParams.get("funnel-step") as unknown as string) ??
            options?.initialStep;

          assert(
            step != null,
            `표시할 스텝을 ${stepQueryKey} 쿼리 파라미터에 지정해주세요. 쿼리 파라미터가 없을 때 초기 스텝을 렌더하려면 useFunnel의 두 번째 파라미터 options에 initialStep을 지정해주세요.`
          );

          return <Funnel<Steps> steps={steps} step={step} {...props} />;
        },
        {
          Step,
        }
      ),
    [step]
  );

  /**
   * @todo
   * 관련 queryString create 함수 작성을 통한 setStepOptions 구현하기
   */
  const setStep = (step: Steps[number]) => {
    return navigate({
      pathname: location.pathname,
      search: `?funnel-step=${step}`,
    });
  };

  return [FunnelComponent, setStep] as unknown as readonly [
    FunnelComponent<Steps>,
    (step: Steps[number], options?: SetStepOptions) => Promise<void>
  ];
};
