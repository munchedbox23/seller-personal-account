import {
  getSelectedAdvertisementIsLoading,
  SelectedAdvertisement,
  getSelectedAdvertisementData,
} from "@/entities/SelectedAdvertisement";
import { Stack } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/providers/StoreProvider";
import { getAdvertisementById } from "@/entities/SelectedAdvertisement/model/slice/selectedAdvertisementSlice";

export const AdvertisementDetails: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const selectedAdvertisement = useAppSelector(getSelectedAdvertisementData);
  const isLoading = useAppSelector(getSelectedAdvertisementIsLoading);

  useEffect(() => {
    if (id) {
      dispatch(getAdvertisementById(id));
    }
  }, [dispatch, id]);

  return (
    <Stack sx={{ width: "100%" }}>
      <SelectedAdvertisement data={selectedAdvertisement} />
    </Stack>
  );
};
