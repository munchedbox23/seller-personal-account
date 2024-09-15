import { ChangeEvent, FC, useMemo, useState } from "react";
import { Stack } from "@mui/material";
import { Text } from "@/shared/ui/Text";
import {
  OrdersList,
  OrdersSortingBlock,
  useGetAllOrdersQuery,
  OrdersFilterBlock,
} from "@/entities/Orders";

export const Orders: FC = () => {
  const { data: allOrders = [], isError, isLoading } = useGetAllOrdersQuery();

  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "default">(
    "default"
  );
  const [statusFilter, setStatusFilter] = useState<number | "all">("all");

  const sortedOrders = useMemo(() => {
    return [...allOrders]
      .filter(
        (order) => statusFilter === "all" || order.status === statusFilter
      )
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a.total - b.total;
        } else if (sortOrder === "desc") {
          return b.total - a.total;
        }
        return 0;
      });
  }, [allOrders, sortOrder, statusFilter]);

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as "asc" | "desc");
  };

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setStatusFilter(value === "all" ? "all" : Number(value));
  };

  return (
    <Stack
      direction="column"
      sx={{ paddingLeft: "60px", paddingBottom: "15px", width: "100%" }}
    >
      <Text as="h2" align="left" size="3xl" weight="bold">
        Заказы
      </Text>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginTop: "15px" }}
      >
        <OrdersFilterBlock
          statusFilter={statusFilter}
          handleStatusChange={handleStatusChange}
        />
        <OrdersSortingBlock
          value={sortOrder}
          handleSortChange={handleSortChange}
        />
      </Stack>
      <OrdersList
        orders={sortedOrders}
        isLoading={isLoading}
        isError={isError}
      />
    </Stack>
  );
};
