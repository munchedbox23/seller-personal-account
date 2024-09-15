import { FC } from "react";
import { Stack } from "@mui/material";
import { Text } from "@/shared/ui/Text";
import { OrdersList, useGetAllOrdersQuery } from "@/entities/Orders";

export const Orders: FC = () => {
  const { data: allOrders = [], isError, isLoading } = useGetAllOrdersQuery();

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
      <OrdersList orders={allOrders} isLoading={isLoading} isError={isError} />
    </Stack>
  );
};
