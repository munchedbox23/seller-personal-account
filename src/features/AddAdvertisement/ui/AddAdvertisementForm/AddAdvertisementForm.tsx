import { Button } from "@/shared/ui/Button";
import { useForm } from "@/shared/lib/hooks/useForm";
import { TextField } from "@mui/material";
import formStyles from "./AddAdvertisementForm.module.css";
import { TCreateAdvertisement } from "../../model/types/addAdvertisement";
import { addAdvertisementThunk } from "../../model/services/addAdvertisementThunk";
import {
  selectLimit,
  useGetAdvertisementsByQueryQuery,
} from "@/entities/Advertisement";
import { useAppDispatch, useAppSelector } from "@/app/providers/StoreProvider";
import { Preloader } from "@/shared/ui/Preloader";
import {
  validateImageUrl,
  validateName,
  validateDescription,
  validatePrice,
} from "@/shared/lib/validateFunctions";
import { useState } from "react";

export const AddAdvertisementForm = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const limit = useAppSelector(selectLimit);
  const start = useAppSelector((state) => state.advertisements.start);
  const { refetch } = useGetAdvertisementsByQueryQuery({ start, limit });
  const isLoading = useAppSelector(
    (store) => store.addAdvertisements.isLoading
  );

  const [errors, setErrors] = useState({
    imageUrl: "",
    name: "",
    price: "",
    description: "",
  });

  const { formState, onChange } = useForm<TCreateAdvertisement>({
    imageUrl: "",
    name: "",
    price: 0,
    description: "",
  });

  const validateForm = () => {
    const imageUrlError = validateImageUrl(formState.imageUrl ?? "");
    const nameError = validateName(formState.name ?? "");
    const priceError = validatePrice(formState.price ?? 0);
    const descriptionError = validateDescription(formState.description ?? "");

    setErrors({
      imageUrl: imageUrlError || "",
      name: nameError || "",
      price: priceError || "",
      description: descriptionError || "",
    });

    return !imageUrlError && !nameError && !priceError && !descriptionError;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const result = await dispatch(
      addAdvertisementThunk({
        ...formState,
        price: Number(formState.price),
      })
    );
    if (addAdvertisementThunk.fulfilled.match(result)) {
      refetch();
      if (!isLoading) {
        onClose();
      }
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      onChange(e);
    }
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <TextField
            type="text"
            autoComplete="off"
            label="Картинка"
            name="imageUrl"
            variant="outlined"
            value={formState.imageUrl ?? ""}
            onChange={onChange}
            sx={{ width: "40%" }}
            error={!!errors.imageUrl}
            helperText={errors.imageUrl}
          />
          <TextField
            type="text"
            autoComplete="off"
            label="Название"
            variant="outlined"
            name="name"
            value={formState.name ?? ""}
            onChange={onChange}
            sx={{ width: "40%" }}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            type="number"
            autoComplete="off"
            inputProps={{
              min: 0,
              max: 10000000,
              step: 1,
            }}
            label="Стоимость"
            name="price"
            variant="outlined"
            value={formState.price ?? 0}
            onChange={handlePriceChange}
            sx={{ width: "40%" }}
            error={!!errors.price}
            helperText={errors.price}
          />
          <TextField
            id="outlined-multiline-static"
            label="Описание"
            autoComplete="off"
            multiline
            name="description"
            rows={3}
            value={formState.description ?? ""}
            onChange={onChange}
            sx={{ width: "40%" }}
            error={!!errors.description}
            helperText={errors.description}
          />
          <Button type="submit" variant="primary" size="sm">
            Создать объявление
          </Button>
        </>
      )}
    </form>
  );
};
