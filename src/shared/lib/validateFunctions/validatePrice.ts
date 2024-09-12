export const validatePrice = (value: number): string | null => {
  return value > 0 ? null : "Стоимость должна быть больше нуля";
};
