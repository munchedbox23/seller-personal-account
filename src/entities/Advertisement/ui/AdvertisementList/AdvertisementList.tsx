import { FC, PropsWithChildren } from "react";
import advertisementsStyles from "./AdvertisementList.module.css";
import { TAdvertisement } from "@/shared/types/avertisementTypes";
import { AdevertisementItem } from "../AdvertisementItem/AdevertisementItem";
import { Box, Stack } from "@mui/material";
import { AdvertisementItemSkeleton } from "../AdvertisementSkeleton/AdvertisementSkeleton";
import { Text } from "@/shared/ui/Text";
import { useAppSelector } from "@/app/providers/StoreProvider";
import { selectLimit } from "../../model/selectors/getAdvertisementsDetails";

type TAdvertisementListProps = {
  advertisements?: Array<TAdvertisement>;
  isLoading: boolean;
  isError?: string | null;
};

export const AdvertisementList: FC<
  PropsWithChildren<TAdvertisementListProps>
> = ({ advertisements = [], isLoading, isError, children }) => {
  const limit = useAppSelector(selectLimit);
  return (
    <article className={advertisementsStyles.advertisements}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexWrap="wrap"
        sx={{ marginRight: "-10px" }}
      >
        {isLoading && !advertisements.length
          ? Array.from(new Array(limit)).map((_, index) => (
              <AdvertisementItemSkeleton key={index} />
            ))
          : advertisements.map((item) => (
              <AdevertisementItem data={item} key={item.id} />
            ))}
      </Stack>
      {(isError || !advertisements.length) && (
        <Box sx={{ textAlign: "center", padding: "16px" }}>
          <Text as="strong" size="xl" weight="semibold" align="center">
            К сожалению, сервис не смог найти ни одного объявления
          </Text>
        </Box>
      )}
      {children}
    </article>
  );
};
