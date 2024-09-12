import { Button } from "@/shared/ui/Button";
import { FC, useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import { AddAdvertisementForm } from "../AddAdvertisementForm/AddAdvertisementForm";

export const AddAdvertisement: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Button
        type="button"
        variant="primary"
        size="sm"
        onClick={handleOpenModal}
      >
        Разместить объявление
      </Button>
      {isModalOpen && (
        <Modal title="Создание объявления" onClose={handleCloseModal}>
          <AddAdvertisementForm onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};
