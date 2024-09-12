import { FC, PropsWithChildren } from "react";
import { TOrder } from "../../model/types/ordersTypes";
import { Text } from "@/shared/ui/Text";
import { Box, Stack } from "@mui/material";
import { OrderItem } from "../OrdersItem/OrdersItem";
import { OpenOrder } from "@/features/OpenOrder";
import { Preloader } from "@/shared/ui/Preloader";

type TOrdersList = {
  isLoading: boolean;
  isError?: string | null;
  orders: TOrder[];
};

export const OrdersList: FC<PropsWithChildren<TOrdersList>> = ({
  children,
  isLoading,
  isError,
  orders = [],
}) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{ width: "100%", padding: "1.6rem", flex: "1 1 auto" }}
    >
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexWrap="wrap"
        sx={{ marginRight: "-10px" }}
      >
        {isLoading && !orders.length ? (
          <Preloader />
        ) : (
          orders.map((item) => (
            <OrderItem
              orderAction={<OpenOrder order={item} />}
              order={item}
              key={item.id}
            />
          ))
        )}
      </Stack>
      {(isError || !orders.length) && (
        <Box sx={{ textAlign: "center", padding: "16px" }}>
          <Text as="strong" size="xl" weight="semibold" align="center">
            К сожалению, сервис не смог найти заказов
          </Text>
        </Box>
      )}
      {children}
    </Stack>
  );
};
