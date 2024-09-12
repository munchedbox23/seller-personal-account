export const validateName = (value: string): string | null => {
  return value.trim().length > 0 ? null : 'Название не может быть пустым';
};
