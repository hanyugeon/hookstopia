import { ComponentPropsWithoutRef } from "react";

const Button = ({ ...props }: ComponentPropsWithoutRef<"button">) => {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
