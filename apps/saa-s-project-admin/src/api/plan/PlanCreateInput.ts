import { SubscriptionCreateNestedManyWithoutPlansInput } from "./SubscriptionCreateNestedManyWithoutPlansInput";

export type PlanCreateInput = {
  description?: string | null;
  durationDays?: number | null;
  numberOfUsers?: number | null;
  planName?: string | null;
  price?: number | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutPlansInput;
};
