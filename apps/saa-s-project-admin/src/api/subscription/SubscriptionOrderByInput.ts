import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  planId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
