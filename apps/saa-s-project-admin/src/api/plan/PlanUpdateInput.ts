import { SubscriptionUpdateManyWithoutPlansInput } from "./SubscriptionUpdateManyWithoutPlansInput";

export type PlanUpdateInput = {
  description?: string | null;
  durationDays?: number | null;
  numberOfUsers?: number | null;
  planName?: string | null;
  price?: number | null;
  subscriptions?: SubscriptionUpdateManyWithoutPlansInput;
};
