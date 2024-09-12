import { FC } from "react";
import styles from "./AdevertisementItem.module.css";
import { TAdvertisement } from "@/shared/types/avertisementTypes";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { Text } from "@/shared/ui/Text";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAppDispatch } from "@/app/providers/StoreProvider";
import { getAdvertisementById } from "@/entities/SelectedAdvertisement/model/slice/selectedAdvertisementSlice";
import { formatDate } from "@/shared/lib/formatDate/formatDate";

type TAdvertisementItemProps = {
  data: TAdvertisement;
};

export const AdevertisementItem: FC<TAdvertisementItemProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChooseAdvertisement = (): void => {
    dispatch(getAdvertisementById(data.id));
    navigate(`/advertisements/${data.id}`, {
      state: { from: location.pathname },
    });
  };

  const formattedDate = formatDate(data.createdAt);

  return (
    <Box
      data-cy="advertisement-card"
      onClick={handleChooseAdvertisement}
      sx={{
        width: "250px",
        margin: "0 10px 25px 0 !important",
        cursor: "pointer",
      }}
    >
      <Stack
        direction="column"
        spacing={1.5}
        sx={{
          alignItems: "flex-start",
          maxWidth: "100%",
          justifyContent: "flex-start",
          borderRadius: "8px",
          boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
          position: "relative",
        }}
      >
        <img
          src={data.imageUrl}
          alt="Adevertisement image"
          className={styles.cardPoster}
        />
        <Stack
          direction="column"
          spacing={0.5}
          sx={{
            alignItems: "flex-start",
            padding: "8px",
            justifyContent: "flex-start",
            maxWidth: "100%",
            paddingTop: 0,
          }}
          className={styles.advertisementDetails}
        >
          <Text as="h3" size="lg" weight="bold">
            {data.name}
          </Text>
          <Text as="span" size="lg" weight="bold" color="primary">
            {`${data.price} ₽`}
          </Text>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <VisibilityIcon fontSize="small" sx={{ color: "gray" }} />
              <Text as="span" size="sm" weight="medium">
                {data.views}
              </Text>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <FavoriteIcon fontSize="small" sx={{ color: "red" }} />
              <Text as="span" size="sm" weight="medium">
                {data.likes}
              </Text>
            </Stack>
          </Stack>
          <Text as="span" size="sm" color="gray" className={styles.date}>
            {formattedDate}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
