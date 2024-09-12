import { FC } from "react";
import { Stack } from "@mui/material";
import { Text } from "@/shared/ui/Text";
import {
  getSelectorError,
  getSelectorLoading,
  OrdersList,
  useGetAllOrdersQuery,
} from "@/entities/Orders";
import { useAppSelector } from "@/app/providers/StoreProvider";
import { OpenOrder } from "@/features/OpenOrder";

export const Orders: FC = () => {
  const { data: allOrders = [] } = useGetAllOrdersQuery();
  const isLoading = useAppSelector(getSelectorLoading);
  const isError = useAppSelector(getSelectorError);
  return (
    <Stack
      direction="column"
      sx={{ paddingLeft: "60px", paddingBottom: "15px" }}
    >
      <Stack direction="row" alignItems="center">
        <Text as="h2" align="left" size="3xl" weight="bold">
          Заказы
        </Text>
      </Stack>
      <OrdersList
        orders={allOrders}
        isLoading={isLoading}
        isError={isError}
      />
    </Stack>
  );
};
