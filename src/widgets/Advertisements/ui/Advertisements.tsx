import { FC } from "react";
import { useAppSelector } from "@/app/providers/StoreProvider";
import { shallowEqual } from "react-redux";
import { useGetAdvertisementsQuery } from "@/entities/Advertisement";
import { Stack } from "@mui/material";
import { Text } from "@/shared/ui/Text";
import { AdvertisementList } from "@/entities/Advertisement/ui/AdvertisementList/AdvertisementList";

export const Advertisements: FC = () => {
  const { isAdvertisementsLoading: isLoading, advertisementsError: isError } =
    useAppSelector(
      (store) => ({
        isAdvertisementsLoading: store.advertisements.isAdvertisementsLoading,
        advertisementsError: store.advertisements.advertisementsError,
      }),
      shallowEqual
    );

  const { data: advertisements = [] } = useGetAdvertisementsQuery();

  return (
    <Stack direction="column" sx={{ paddingLeft: "60px" }}>
      <Text as="h2" align="left" size="3xl" weight="bold">
        Ваши объявления
      </Text>
      <AdvertisementList
        advertisements={advertisements}
        isLoading={isLoading}
        isError={isError}
      />
    </Stack>
  );
};
