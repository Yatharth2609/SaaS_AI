import { Subscription } from "../subscription/Subscription";

export type Plan = {
  createdAt: Date;
  description: string | null;
  durationDays: number | null;
  id: string;
  numberOfUsers: number | null;
  planName: string | null;
  price: number | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
