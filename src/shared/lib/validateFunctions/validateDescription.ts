export const validateDescription = (value: string): string | null => {
  return value.trim().length > 0 ? null : "Описание не может быть пустым";
};
