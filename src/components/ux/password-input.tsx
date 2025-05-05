"use client";
// import { EyeIcon } from "@/components/icons/eye";
import { cn } from "@/utils/cn";
import { forwardRef, useState } from "react";
import { EyeIcon } from "../icons/eye";

type passwordInputProps = React.ComponentProps<"input"> & {
  boxClassName?: string;
};

export const PasswordInput = forwardRef<HTMLInputElement, passwordInputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const { boxClassName, ...rest } = props;
    return (
      <div className="label-container relative">
        <label className={cn("input input-md input-bordered", boxClassName)}>
          <input
            autoComplete="current-password"
            ref={ref}
            {...rest}
            type={showPassword ? "text" : "password"}
            onBlur={() => setShowPassword(false)}
            className={cn(
              "h-10 w-full rounded-xl bg-gray-50 text-sm font-normal outline-none focus:border-primary-content focus:bg-base-content focus:outline-none  border px-2  text-gray-700",
              props.className
            )}
          />
          <button
            type="button"
            className="absolute right-2 h-full"
            onClick={() => setShowPassword(!showPassword)}
          >
            <EyeIcon
              open={showPassword}
              className="h-5 w-5 bg-gray-50 text-gray-400"
            />
          </button>
        </label>
      </div>
    );
  }
);
