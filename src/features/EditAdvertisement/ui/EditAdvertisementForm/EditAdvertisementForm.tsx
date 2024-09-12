import { Button } from "@/shared/ui/Button";
import { TextField } from "@mui/material";
import styles from "./EditAdvertisementForm.module.css";
import { Preloader } from "@/shared/ui/Preloader";
import { usePatchAdvertisementMutation } from "../../api/editAdvertisement";
import { useState, useEffect } from "react";
import { TUpdateAdvertisement } from "../../model/types/editAdvertisement";
import {
  validateImageUrl,
  validateName,
  validateDescription,
  validatePrice,
} from "@/shared/lib/validateFunctions";
import { useAppDispatch } from "@/app/providers/StoreProvider";
import { getAdvertisementById } from "@/entities/SelectedAdvertisement/model/slice/selectedAdvertisementSlice";
import { TAdvertisement } from "@/shared/types/avertisementTypes";

interface EditAdvertisementFormProps {
  onClose: () => void;
  currentData: TAdvertisement;
}

const EditAdvertisementForm = ({
  onClose,
  currentData,
}: EditAdvertisementFormProps) => {
  const [patchAdvertisement, { isLoading: isEditLoading }] =
    usePatchAdvertisementMutation();

  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<TUpdateAdvertisement>({
    ...currentData,
  });
  const [errors, setErrors] = useState({
    imageUrl: "",
    name: "",
    price: "",
    description: "",
  });

  const validateForm = (values: TUpdateAdvertisement) => {
    const imageUrlError = validateImageUrl(values.imageUrl ?? "");
    const nameError = validateName(values.name ?? "");
    const priceError = validatePrice(values.price ?? 0);
    const descriptionError = validateDescription(values.description ?? "");

    setErrors({
      imageUrl: imageUrlError || "",
      name: nameError || "",
      price: priceError || "",
      description: descriptionError || "",
    });

    return !imageUrlError && !nameError && !priceError && !descriptionError;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      handleChange(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm(formState)) return;

    try {
      await patchAdvertisement({
        id: currentData.id,
        patchData: formState,
      }).unwrap();
      dispatch(getAdvertisementById(currentData.id));
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setFormState(currentData);
  }, [currentData]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isEditLoading ? (
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
            onChange={handleChange}
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
            onChange={handleChange}
            sx={{ width: "40%" }}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            type="number"
            autoComplete="off"
            inputProps={{ min: 0, max: 10000000, step: 10000 }}
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
            onChange={handleChange}
            sx={{ width: "40%" }}
            error={!!errors.description}
            helperText={errors.description}
          />
          <Button type="submit" variant="primary" size="sm">
            Подтвердить изменения
          </Button>
        </>
      )}
    </form>
  );
};

export default EditAdvertisementForm;
