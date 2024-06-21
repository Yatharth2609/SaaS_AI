import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  isActive?: boolean | null;
  plan?: PlanWhereUniqueInput | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
