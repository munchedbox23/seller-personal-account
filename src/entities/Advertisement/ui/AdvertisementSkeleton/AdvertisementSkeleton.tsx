import { FC } from "react";
import { Box, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import styles from "../AdvertisementItem/AdevertisementItem.module.css";

export const AdvertisementItemSkeleton: FC = () => {
  return (
    <Box
      sx={{
        width: "250px",
        margin: "0 10px 25px 0 !important",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          alignItems: "flex-start",
          maxWidth: "100%",
          justifyContent: "flex-start",
          borderRadius: "8px",
          boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
          position: "relative",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={250} />
        <Stack
          direction="column"
          spacing={2}
          sx={{
            alignItems: "flex-start",
            padding: "8px",
            justifyContent: "flex-start",
            maxWidth: "100%",
            paddingTop: 0,
          }}
          className={styles.advertisementDetails}
        >
          <Skeleton variant="text" width="80%" height={30} />
          <Skeleton variant="text" width="50%" height={25} />
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={30} />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={30} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
