import { Button } from "@/shared/ui/Button";
import { FC, useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import EditAdvertisementForm from "../EditAdvertisementForm/EditAdvertisementForm";
import { Stack } from "@mui/material";
import { TAdvertisement } from "@/shared/types/avertisementTypes";
import { useDeleteAdvertisementMutation } from "../../api/editAdvertisement";
import {
  selectLimit,
  useGetAdvertisementsQuery,
} from "@/entities/Advertisement";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/app/providers/StoreProvider";

interface EditAdvertisementProps {
  advertisement: TAdvertisement;
}

export const EditAdvertisement: FC<EditAdvertisementProps> = ({
  advertisement,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteAdvertisement] = useDeleteAdvertisementMutation();
  const limit = useAppSelector(selectLimit);
  const { refetch } = useGetAdvertisementsQuery({ limit });
  const navigate = useNavigate();

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleDelete = async () => {
    try {
      await deleteAdvertisement(advertisement.id).unwrap();
      refetch();
      navigate(-1);
    } catch (err) {
      console.error("Failed to delete advertisement:", err);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={handleOpenModal}
        >
          Редактировать объявление
        </Button>
        <Button
          type="button"
          variant="primary"
          size="sm"
          style={{ backgroundColor: "red" }}
          onClick={handleDelete}
        >
          Удалить объявление
        </Button>
      </Stack>
      {isModalOpen && (
        <Modal title="Редактирование объявления" onClose={handleCloseModal}>
          <EditAdvertisementForm
            currentData={advertisement}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </>
  );
};
