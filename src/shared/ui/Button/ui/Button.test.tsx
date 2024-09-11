import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("button should render correctly", () => {
    render(
      <Button type="button" size="md" variant="primary">
        Click me
      </Button>
    );
    expect(screen.getByText(/Click me/)).toBeInTheDocument();
  });

  it("renders with primary variant", () => {
    render(
      <Button size="md" type="button" variant="primary">
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle(
      "background-color: #007ac0; color: white;"
    );
  });

  it("renders with secondary variant", () => {
    render(
      <Button size="md" type="button" variant="secondary">
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle(
      "border: 2px solid #0055cc; color: #0ea5e9; background-color: white;"
    );
  });

  it("renders with ghost variant", () => {
    render(
      <Button size="md" type="button" variant="ghost">
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle(
      "color: #0ea5e9; background-color: white; transition: all 0.3s ease;"
    );
  });

  it("renders with small size", () => {
    render(
      <Button size="sm" type="button" variant="primary">
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle(
      "padding: 0.5rem 1rem; font-size: 0.875rem;"
    );
  });

  it("renders with medium size", () => {
    render(
      <Button size="md" type="button" variant="primary">
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle("padding: 1rem 1.5rem; font-size: 1rem;");
  });

  it("renders with large size", () => {
    render(
      <Button size="lg" type="button" variant="primary">
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle(
      "padding: 1.2rem 2rem; font-size: 1.125rem;"
    );
  });

  it("renders with submit type", () => {
    render(
      <Button size="md" type="submit" variant="primary">
        Submit
      </Button>
    );
    const buttonElement = screen.getByText(/Submit/i);
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  it("renders with reset type", () => {
    render(
      <Button size="md" type="reset" variant="primary">
        Reset
      </Button>
    );
    const buttonElement = screen.getByText(/Reset/i);
    expect(buttonElement).toHaveAttribute("type", "reset");
  });
});
