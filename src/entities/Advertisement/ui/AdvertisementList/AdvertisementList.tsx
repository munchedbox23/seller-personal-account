import { Children, FC, PropsWithChildren } from "react";
import advertisementsStyles from "./AdvertisementList.module.css";
import { TAdvertisement } from "../../model/types/avertisementTypes";
import { AdevertisementItem } from "../AdvertisementItem/AdevertisementItem";
import { Box, Stack } from "@mui/material";
import { AdvertisementItemSkeleton } from "../AdvertisementSkeleton/AdvertisementSkeleton";
import { Text } from "@/shared/ui/Text";

type TAdvertisementListProps = {
  advertisements?: Array<TAdvertisement>;
  isLoading: boolean;
  isError?: string | null;
};

export const AdvertisementList: FC<
  PropsWithChildren<TAdvertisementListProps>
> = ({ advertisements = [], isLoading, isError, children }) => {
  return (
    <article className={advertisementsStyles.advertisements}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexWrap="wrap"
        sx={{ marginRight: "-10px" }}
      >
        {isLoading && advertisements.length
          ? Array.from(new Array(10)).map((_, index) => (
              <AdvertisementItemSkeleton key={index} />
            ))
          : advertisements
              .slice(0, 10)
              .map((item) => <AdevertisementItem data={item} key={item.id} />)}
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
