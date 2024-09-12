import { FC } from "react";
import { useParams } from "react-router-dom";
import { AdvertisementDetails } from "@/widgets/AdvertisementDetails";

export const SelectedAdvertisementPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return id ? (
    <AdvertisementDetails id={id} />
  ) : (
    <div>Нет объявления для отображения</div>
  );
};
