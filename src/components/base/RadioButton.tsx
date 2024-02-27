import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";

const RadioButton = forwardRef(
  (
    {
      name,
      value,
      ...props
    }: Omit<ComponentPropsWithoutRef<"input">, "id" | "type" | "className">,
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
        <span>{value}</span>
      </label>
    );
  }
);

export default RadioButton;
