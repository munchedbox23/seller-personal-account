export const checkResponse = <T>(response: Response): Promise<T> => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

export const request = <T>(url: string, options?: RequestInit): Promise<T> => {
  return fetch(url, options).then(checkResponse<T>);
};
