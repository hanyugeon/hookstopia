import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";

const Input = forwardRef(
  (
    { ...props }: ComponentPropsWithoutRef<"input">,
    ref: Ref<HTMLInputElement>
  ) => {
    return <input ref={ref} {...props} />;
  }
);

export default Input;
