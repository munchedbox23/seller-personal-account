import {
  PolymorphicComponentPropsWithRef,
} from "@/shared/types/text-types";
import { forwardRef } from "react";
import styled from "styled-components";
import React from "react";

const emphasisStyles = {
  low: "color: #718096; font-weight: light;",
};

const sizeStyles = {
  sm: "font-size: 0.875rem;",
  base: "font-size: 1rem;",
  lg: "font-size: 1.125rem;",
  xl: "font-size: 1.25rem;",
  "2xl": "font-size: 1.5rem;",
  "3xl": "font-size: 1.875rem;",
};

const weightStyles = {
  thin: "font-weight: 100;",
  normal: "font-weight: 400;",
  medium: "font-weight: 500;",
  semibold: "font-weight: 600;",
  bold: "font-weight: 700;",
  black: "font-weight: 900;",
};

const alignStyles = {
  left: "text-align: left;",
  center: "text-align: center;",
  right: "text-align: right;",
};

const TextElement = styled.span<{
  emphasis?: "low";
  size?: keyof typeof sizeStyles;
  weight?: keyof typeof weightStyles;
  align?: keyof typeof alignStyles;
  italic?: boolean;
  underline?: boolean;
}>`
  width: 100%;
  ${({ emphasis }) => emphasis && emphasisStyles[emphasis]}
  ${({ size }) => size && sizeStyles[size]}
  ${({ weight }) => weight && weightStyles[weight]}
  ${({ align }) => align && alignStyles[align]}
  ${({ italic }) => italic && "font-style: italic;"}
  ${({ underline }) =>
    underline && "text-decoration: underline; text-underline-offset: 2px;"}
`;

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  {
    emphasis?: "low";
    size?: keyof typeof sizeStyles;
    weight?: keyof typeof weightStyles;
    align?: keyof typeof alignStyles;
    italic?: boolean;
    underline?: boolean;
  }
>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      className,
      ...props
    }: TextProps<C>,
    ref: React.ForwardedRef<C>
  ) => {
    const Component = as || "span";
    if (!Component) return null;

    return (
      <TextElement
        as={Component}
        ref={ref}
        emphasis={emphasis}
        size={size}
        weight={weight}
        align={align}
        italic={italic}
        underline={underline}
        className={className}
        {...props}
      />
    );
  }
) as TextComponent;
