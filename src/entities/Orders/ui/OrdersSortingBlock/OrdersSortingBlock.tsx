import { Box } from "@mui/material";
import { ChangeEvent, FC } from "react";
import styles from "./OrdersSortingBlock.module.css";

type TOrdersSortingBlockProps = {
  value: "default" | "asc" | "desc";
  handleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const OrdersSortingBlock: FC<TOrdersSortingBlockProps> = ({
  value,
  handleSortChange,
}) => {
  return (
    <Box>
      <select
        name="sort"
        id="sort"
        value={value}
        onChange={handleSortChange}
        className={styles.sortSelect}
      >
        <option value="default">По умолчанию</option>
        <option value="asc">Сумма: по возрастанию</option>
        <option value="desc">Сумма: по убыванию</option>
      </select>
    </Box>
  );
};
