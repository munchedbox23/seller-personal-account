import { ComponentProps, forwardRef, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

type TButtonProps = ComponentProps<"button"> & {
  size: "sm" | "md" | "lg";
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "ghost";
  className?: string;
};

const sizeStyles = {
  sm: "padding: 0.5rem 1rem; font-size: 0.9rem;",
  md: "padding: 1rem 1.5rem; font-size: 1rem;",
  lg: "padding: 1.2rem 2rem; font-size: 1.125rem;",
};

const variantStyles = {
  primary: "background-color: #00aaff; color: white;",
  secondary:
    "border: 2px solid #0055cc; color: #00aaff; background-color: white;",
  ghost: "color: #00aaff; background-color: white; transition: all 0.3s ease;",
};

const StyledButton = styled.button<TButtonProps>`
  width: max-content;
  border-radius: 0.375rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.7s ease;
  border: none;
  ${({ size }) => sizeStyles[size]}
  ${({ variant }) => variantStyles[variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #0099f7;
  }
`;

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<TButtonProps>
>(({ children, type = "button", className, ...props }, ref) => {
  return (
    <StyledButton ref={ref} type={type} className={className} {...props}>
      {children}
    </StyledButton>
  );
});

export const MButton = motion(Button);
