import {
  Modal,
  Button,
  Box,
  List,
  ListItem,
  Typography,
  Stack,
} from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuiv4 } from "uuid";
import { appRoutes } from "@/shared/const/router";
import styles from "./OpenOrder.module.css";
import { TOrder } from "@/entities/Orders/model/types/ordersTypes";
import { useUpdateOrderStatusMutation } from "../api/executeOrderApi";
import { useGetAllOrdersQuery } from "@/entities/Orders/api/ordersApi";

export const OpenOrder: FC<{ order: TOrder }> = ({ order }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const { refetch } = useGetAllOrdersQuery();

  const handleCompleteOrder = async (orderId: string) => {
    try {
      await updateOrderStatus({ id: orderId, status: 4 }).unwrap();
      refetch();
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ marginTop: 2 }}
        >
          Показать все товары
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleCompleteOrder(order.id)}
          sx={{ marginTop: 2 }}
        >
          Завершить заказ
        </Button>
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 24,
            paddingBottom: "15px",
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Товары в заказе
          </Typography>
          <List sx={{ maxHeight: "300px", overflowY: "auto" }}>
            {order.items.map((item) => (
              <ListItem key={uuiv4()}>
                <Link
                  to={{ pathname: `${appRoutes.allAdvertisements}/${item.id}` }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      color: "black",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt="картинка товара"
                        className={styles.orderPoster}
                      />
                    )}
                    <Typography variant="body1" sx={{ marginRight: "5px" }}>
                      {item.name} (x{item.count})
                    </Typography>
                    <Typography variant="body1">
                      {(item.price * item.count).toFixed(2)} ₽
                    </Typography>
                  </Box>
                </Link>
              </ListItem>
            ))}
          </List>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClose}
            sx={{ marginTop: 2 }}
          >
            Закрыть
          </Button>
        </Box>
      </Modal>
    </>
  );
};
