import { SortOrder } from "../../util/SortOrder";

export type PlanOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  durationDays?: SortOrder;
  id?: SortOrder;
  numberOfUsers?: SortOrder;
  planName?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
