import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/providers/StoreProvider";
import { shallowEqual } from "react-redux";
import {
  useGetAdvertisementsByQueryQuery,
  useGetAllAdvertisementsQuery,
} from "@/entities/Advertisement";
import { Stack } from "@mui/material";
import { Text } from "@/shared/ui/Text";
import { AdvertisementList } from "@/entities/Advertisement/ui/AdvertisementList/AdvertisementList";
import { UnstyledSelectControlled } from "@/features/common/Select";
import Pagination from "@mui/material/Pagination";
import {
  setTotalRecords,
  setLimit,
  setPage,
} from "@/entities/Advertisement/model/sllice/advertisementSlice";

export const Advertisements: FC = () => {
  const dispatch = useAppDispatch();
  const {
    isAdvertisementsLoading: isLoading,
    advertisementsError: isError,
    start,
    page,
    limit,
    totalRecords,
  } = useAppSelector(
    (store) => ({
      isAdvertisementsLoading: store.advertisements.isAdvertisementsLoading,
      advertisementsError: store.advertisements.advertisementsError,
      start: store.advertisements.start,
      page: store.advertisements.page,
      limit: store.advertisements.limit,
      totalRecords: store.advertisements.totalRecords,
    }),
    shallowEqual
  );

  const { data: allAdvertisements = [] } = useGetAllAdvertisementsQuery();
  const { data: advertisements = [] } = useGetAdvertisementsByQueryQuery({
    start,
    limit,
  });

  useEffect(() => {
    if (allAdvertisements.length > 0) {
      dispatch(setTotalRecords(allAdvertisements.length));
    }
  }, [allAdvertisements, dispatch]);

  const handleLimitChange = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    dispatch(setPage(page));
  };

  const totalPages = Math.ceil(totalRecords / limit);

  return (
    <Stack
      direction="column"
      sx={{ paddingLeft: "60px", paddingBottom: "15px" }}
    >
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
      <Pagination
        count={totalPages}
        onChange={handlePageChange}
        color="primary"
        page={page}
        sx={{ marginTop: "16px", alignSelf: "center" }}
      />
    </Stack>
  );
};
