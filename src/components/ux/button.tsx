"use client";

import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import { useFormStatus } from "react-dom";

type buttonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, buttonProps>(
  (props, ref) => {
    const { pending } = useFormStatus();
    return (
      <button
        ref={ref}
        {...props}
        type={pending ? "button" : "submit"}
        className={cn(
          "w-full h-11 flex justify-center items-center rounded-lg gap-2 font-semibold text-white bg-blue-500",
          props.className
        )}
      >
        {pending && props.type !== "button" ? (
          //eslint-disable-next-line
          <img
            src="https://media.tenor.com/yfaFcsYBgqMAAAAi/loading-gif.gif"
            alt="loading"
            width={20}
            height={20}
          />
        ) : (
          <>{props.children}</>
        )}
      </button>
    );
  }
);
