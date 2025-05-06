import { cn } from "@/utils/cn";
import { forwardRef } from "react";

type textInputProps = React.ComponentProps<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, textInputProps>(
  (props, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={cn(
          props.className?.includes("default")
            ? props.className
            : "h-10 w-full rounded-xl bg-gray-50 text-sm font-normal outline-none focus:border-primary-content focus:bg-base-content focus:outline-none  border px-2  text-gray-700",
          props.className
        )}
      ></textarea>
    );
  }
);
