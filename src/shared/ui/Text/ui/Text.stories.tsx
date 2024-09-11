import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      description: "Варианты размера текста",
      defaultValue: "base",
      options: ["sm", "base", "lg", "xl", "2xl", "3xl"],
      control: {
        type: "select",
      },
    },
    weight: {
      type: "string",
      description: "Варианты веса шрифта",
      defaultValue: "normal",
      options: ["thin", "normal", "medium", "semibold", "bold", "black"],
      control: {
        type: "select",
      },
    },
    align: {
      type: "string",
      description: "Варианты расположения текста",
      defaultValue: "left",
      options: ["left", "center", "right"],
      control: {
        type: "inline-radio",
      },
    },
    underline: {
      type: "boolean",
      description: "Возможность добавлять нижний элемент",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    italic: {
      type: "boolean",
      description: "Возможность сделать текст курсивом",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    emphasis: {
      type: "string",
      description: "Варианты акцента текста",
      defaultValue: undefined,
      options: ["low"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children:
      "It should be noted that the strengthening and development of the internal structure plays a decisive role for the progress of the professional community!",
  },
};
