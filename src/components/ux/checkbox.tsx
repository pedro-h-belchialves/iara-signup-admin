import React, { forwardRef } from "react";

type checkboxInputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, checkboxInputProps>(
  (props, ref) => {
    const { ...rest } = props;

    return (
      <input ref={ref} {...rest} type="checkbox" className="toggle toggle-sm" />
    );
  }
);
