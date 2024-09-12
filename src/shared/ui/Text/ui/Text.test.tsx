import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("renders with default props", () => {
    render(<Text>Default text</Text>);
    expect(screen.getByText("Default text")).toBeInTheDocument();
  });

  it("renders with custom size", () => {
    render(<Text size="lg">Large text</Text>);
    const textElement = screen.getByText("Large text");
    expect(textElement).toHaveStyle("font-size: 1.125rem;");
  });

  it("renders with custom weight", () => {
    render(<Text weight="bold">Bold text</Text>);
    const textElement = screen.getByText("Bold text");
    expect(textElement).toHaveStyle("font-weight: 700;");
  });

  it("renders with custom emphasis", () => {
    render(<Text emphasis="low">Low emphasis text</Text>);
    const textElement = screen.getByText("Low emphasis text");
    expect(textElement).toHaveStyle("color: #718096; font-weight: light;");
  });

  it("renders with custom align", () => {
    render(<Text align="center">Centered text</Text>);
    const textElement = screen.getByText("Centered text");
    expect(textElement).toHaveStyle("text-align: center;");
  });

  it("renders with custom italic", () => {
    render(<Text italic={true}>Italic text</Text>);
    const textElement = screen.getByText("Italic text");
    expect(textElement).toHaveStyle("font-style: italic;");
  });

  it("renders with custom className", () => {
    render(<Text className="custom-class">Custom class text</Text>);
    const textElement = screen.getByText("Custom class text");
    expect(textElement).toHaveClass("custom-class");
  });

  it("renders with as prop", () => {
    render(<Text as="h1">Heading text</Text>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("renders with polymorphic component", () => {
    render(<Text as="div">Div text</Text>);
    expect(screen.getByText("Div text")).toBeInTheDocument();
  });
});
