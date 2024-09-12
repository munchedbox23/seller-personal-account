import { Button } from "@/shared/ui/Button";
import { useForm } from "@/shared/lib/hooks/useForm";
import { TextField } from "@mui/material";
import formStyles from "./AddAdvertisementForm.module.css";
import { TCreateAdvertisement } from "../../model/types/addAdvertisement";
import { addAdvertisementThunk } from "../../model/services/addAdvertisementThunk";
import { useGetAdvertisementsQuery } from "@/entities/Advertisement";
import { useAppDispatch, useAppSelector } from "@/app/providers/StoreProvider";
import { Preloader } from "@/shared/ui/Preloader";

export const AddAdvertisementForm = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const { refetch } = useGetAdvertisementsQuery();
  const isLoading = useAppSelector(
    (store) => store.addAdvertisements.isLoading
  );

  const { formState, onChange } = useForm<TCreateAdvertisement>({
    imageUrl: "",
    name: "",
    price: 0,
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(addAdvertisementThunk(formState));
    if (addAdvertisementThunk.fulfilled.match(result)) {
      refetch();
      if (!isLoading) {
        onClose();
      }
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
            value={formState.imageUrl}
            onChange={onChange}
            sx={{ width: "40%" }}
          />
          <TextField
            type="text"
            autoComplete="off"
            label="Название"
            variant="outlined"
            name="name"
            value={formState.name}
            onChange={onChange}
            sx={{ width: "40%" }}
          />
          <TextField
            type="number"
            autoComplete="off"
            inputProps={{
              min: 0,
              max: 10000000,
              step: 10000,
            }}
            label="Стоимость"
            name="price"
            variant="outlined"
            value={Number(formState.price)}
            onChange={onChange}
            sx={{ width: "40%" }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Описание"
            autoComplete="off"
            multiline
            name="description"
            rows={3}
            value={formState.description}
            onChange={onChange}
            sx={{ width: "40%" }}
          />
          <Button type="submit" variant="primary" size="sm">
            Создать объявление
          </Button>
        </>
      )}
    </form>
  );
};
