import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    style: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: ["bg-secondary-dark", "hover:bg-secondary-dark-hover", "text-secondary"]
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    }
  },
  defaultVariants: {
    style: "default",
    size: "default",
  }
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({ style, size, className, ...props }: ButtonProps) {
  return (
    <button 
      {...props}
      className={twMerge(buttonStyles({ style, size }), className)} 
    />
  );
}
