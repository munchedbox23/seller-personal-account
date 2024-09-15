import styles from "./OrdersFilterBlock.module.css";
import { Box } from "@mui/material";
import { OrderStatus } from "../../model/types/ordersTypes";
import { ChangeEvent, FC } from "react";

type TOrdersFilterBlockProps = {
  statusFilter: number | "all";
  handleStatusChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const OrdersFilterBlock: FC<TOrdersFilterBlockProps> = ({
  handleStatusChange,
  statusFilter,
}) => {
  return (
    <Box>
      <select
        name="status"
        id="status-select"
        value={statusFilter}
        onChange={handleStatusChange}
        className={styles.filterSelect}
      >
        <option value="all">Все</option>
        {Object.entries(OrderStatus).map(([key, value]) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </select>
    </Box>
  );
};
