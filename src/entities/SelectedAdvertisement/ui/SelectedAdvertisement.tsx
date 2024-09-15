import { FC, PropsWithChildren } from "react";
import styles from "./SelectedAdvertisement.module.css";
import { Stack, Box } from "@mui/material";
import { TAdvertisement } from "@/shared/types/avertisementTypes";
import { Text } from "@/shared/ui/Text";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { formatDate } from "@/shared/lib/formatDate/formatDate";

type TSelectedAdvertisementProps = {
  data: TAdvertisement;
};

export const SelectedAdvertisement: FC<
  PropsWithChildren<TSelectedAdvertisementProps>
> = ({ data, children }) => {
  const formattedDate = formatDate(data.createdAt);

  return (
    <article className={styles.selectedAdvertisement}>
      <Stack
        direction="row"
        flexWrap="nowrap"
        gap="56px"
        sx={{ width: "100%" }}
      >
        <Box sx={{ width: "550px", height: "478px", flexGrow: 0 }}>
          <Stack
            direction="column"
            alignItems="flex-start"
            sx={{ width: "100%", maxHeight: "450px", height: "100%" }}
            spacing={2}
          >
            <Text as="h2" weight="bold" align="left" size="3xl">
              {data.name}
            </Text>
            <Box className={styles.imageFrameWrapper}>
              <span
                className={styles.imageFrameCover}
                style={{ backgroundImage: `url(${data.imageUrl})` }}
              ></span>
              <img
                src={data.imageUrl}
                alt={data.name}
                className={styles.imagePoster}
              />
            </Box>
          </Stack>
        </Box>
        <Box sx={{ width: "35%" }}>
          <Stack direction="column">
            <Text
              data-cy="price"
              as="span"
              weight="semibold"
              size="3xl"
              align="left"
            >
              {`${data.price} ₽`}
            </Text>
            <Stack direction="row" spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <VisibilityIcon fontSize="medium" sx={{ color: "gray" }} />
                <Text as="span" size="lg" weight="medium">
                  {data.views}
                </Text>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <FavoriteIcon fontSize="medium" sx={{ color: "red" }} />
                <Text as="span" size="lg" weight="medium">
                  {data.likes}
                </Text>
              </Stack>
            </Stack>
            <Text as="span" size="sm" color="gray" className={styles.date}>
              {formattedDate}
            </Text>
            {data.description && (
              <Box sx={{ marginBottom: "10px" }}>
                <Text as="h3" size="3xl" weight="bold">
                  Описание
                </Text>
                <Text as="p" className={styles.description}>
                  {data.description}
                </Text>
              </Box>
            )}
          </Stack>
          {children}
        </Box>
      </Stack>
    </article>
  );
};
