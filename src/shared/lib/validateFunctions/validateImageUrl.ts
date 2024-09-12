export const validateImageUrl = (value: string): string | null => {
  const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i;
  return urlPattern.test(value) ? null : "Введите корректный URL изображения";
};
