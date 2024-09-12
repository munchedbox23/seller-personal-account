import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/app/providers/StoreProvider";
import { shallowEqual } from "react-redux";
import { useGetAdvertisementsQuery } from "@/entities/Advertisement";
import { Stack } from "@mui/material";
import { Text } from "@/shared/ui/Text";
import { AdvertisementList } from "@/entities/Advertisement/ui/AdvertisementList/AdvertisementList";
import { UnstyledSelectControlled } from "@/features/common/Select";
import { selectLimit } from "@/entities/Advertisement";
import { setLimit } from "@/entities/Advertisement/model/sllice/advertisementSlice";

export const Advertisements: FC = () => {
  const dispatch = useAppDispatch();

  const { isAdvertisementsLoading: isLoading, advertisementsError: isError } =
    useAppSelector(
      (store) => ({
        isAdvertisementsLoading: store.advertisements.isAdvertisementsLoading,
        advertisementsError: store.advertisements.advertisementsError,
      }),
      shallowEqual
    );

  const limit = useAppSelector(selectLimit);
  const { data: advertisements = [] } = useGetAdvertisementsQuery({ limit });

  const handleLimitChange = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  return (
    <Stack direction="column" sx={{ paddingLeft: "60px" }}>
      <Stack direction="row" alignItems="center">
        <Text as="h2" align="left" size="3xl" weight="bold">
          Ваши объявления
        </Text>
        <UnstyledSelectControlled value={limit} onChange={handleLimitChange} />
      </Stack>
      <AdvertisementList
        advertisements={advertisements}
        isLoading={isLoading}
        isError={isError}
      />
    </Stack>
  );
};
