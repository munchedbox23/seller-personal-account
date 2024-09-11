import { useAppDispatch } from "@/app/providers/StoreProvider";
import { ChangeEvent, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = <T>(input: T) => {
  const [formState, setFormState] = useState(input);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: ChangeEvent<T>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>, asyncThunk: any) => {
    e.preventDefault();
    dispatch(asyncThunk(formState))
      .then(() => navigate(`/`, { replace: true }))
      .catch((error: unknown) => console.error(error));
    setFormState(input);
  };

  return { formState, setFormState, onChange, onSubmit };
};
