import { FC, ReactNode } from "react";
import { TOrder } from "../../model/types/ordersTypes";
import { Card, CardContent, Typography } from "@mui/material";
import { OrderStatus } from "../../model/types/ordersTypes";

type TOrderItemProps = {
  order: TOrder;
  orderAction: ReactNode;
};

export const OrderItem: FC<TOrderItemProps> = ({ order, orderAction }) => {
  const statusText = Object.keys(OrderStatus).find(
    (key) => OrderStatus[key as keyof typeof OrderStatus] === order.status
  );

  return (
    <Card sx={{ maxWidth: 600, margin: "20px auto", padding: 2 }}>
      <CardContent>
        <Typography variant="h6">Номер заказа: {order.id}</Typography>
        <Typography variant="body1">
          Дата создания: {new Date(order.createdAt).toLocaleDateString()}
        </Typography>
        {order.finishedAt && (
          <Typography variant="body1">
            Дата завершения: {new Date(order.finishedAt).toLocaleDateString()}
          </Typography>
        )}
        <Typography variant="body1">
          Количество товаров:{" "}
          {order.items.reduce((acc, item) => acc + item.count, 0)}
        </Typography>
        <Typography variant="body1">
          Стоимость заказа: {order.total.toFixed(2)} ₽
        </Typography>
        <Typography variant="body1">Статус: {statusText}</Typography>
        {orderAction}
      </CardContent>
    </Card>
  );
};
