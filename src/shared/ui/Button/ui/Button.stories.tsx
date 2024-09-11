import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      description: "Содержимое кнопки (текст или другие элементы)",
    },
    type: {
      type: "string",
      description: "Назначение кнопки",
      defaultValue: "button",
      options: ["button", "submit", "reset"],
    },
    variant: {
      type: "string",
      description: "Вариант оформления обрамления кнопки",
      defaultValue: "primary",
      options: ["primary", "ghost", "secondary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      type: "string",
      description: "Варианты размера кнопки",
      defaultValue: "md",
      options: ["sm", "md", "lg"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "button",
    children: "Click me",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    type: "button",
    children: "Click me",
    variant: "secondary",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    type: "button",
    children: "Click me",
    variant: "ghost",
    size: "md",
  },
};
