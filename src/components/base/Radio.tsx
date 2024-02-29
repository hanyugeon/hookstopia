import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";

type RadioProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "id" | "type" | "className"
> & {
  title: string;
};

const RadioButton = forwardRef(
  (
    { name, value, title, ...props }: RadioProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <label htmlFor={`id-${value}`}>
        <input
          id={`id-${value}`}
          name={name}
          className="peer hidden"
          type="radio"
          value={value}
          ref={ref}
          {...props}
        />
        <span>{title}</span>
      </label>
    );
  }
);

export default RadioButton;
