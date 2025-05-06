"use client";

import { formatCurrency } from "@/utils/format-currency";
import { forwardRef, useEffect, useState } from "react";

type PhoneInputProps = {} & React.ComponentProps<"input">;

export const CurrencyInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (props, ref) => {
    const { defaultValue, ...rest } = props;

    const [value, setValue] = useState(defaultValue || "");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(event);

      const value = event.target.value;
      const formattedValue = formatCurrency(value);

      setValue(formattedValue);
    };

    useEffect(() => {
      setValue(defaultValue || "");
    }, [defaultValue]);

    return (
      <>
        <label className="relative ">
          <span className="text-gray-500 z-30 h-full flex items-center absolute left-2  ">
            R$
          </span>
          <input
            onChange={handleChange}
            value={value}
            {...rest}
            ref={ref}
            className={
              "h-10 w-full pl-8 relative rounded-xl bg-gray-50 text-sm font-normal outline-none focus:border-primary-content focus:bg-base-content focus:outline-none  border px-2  text-gray-700"
            }
          />
        </label>
      </>
    );
  }
);
