import { TAdvertisement } from "@/shared/types/avertisementTypes";

export const OrderStatus = {
  Created: 0,
  Paid: 1,
  Transport: 2,
  DeliveredToThePoint: 3,
  Received: 4,
  Archived: 5,
  Refund: 6,
} as const;

export type OrderItem = TAdvertisement & { count: number };

export type TOrder = {
  id: string;
  status: (typeof OrderStatus)[keyof typeof OrderStatus];
  createdAt: string;
  finishedAt?: string;
  items: Array<OrderItem>;
  deliveryWay: string;
  total: number;
};
