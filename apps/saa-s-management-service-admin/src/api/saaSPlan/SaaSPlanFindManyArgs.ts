import { SaaSPlanWhereInput } from "./SaaSPlanWhereInput";
import { SaaSPlanOrderByInput } from "./SaaSPlanOrderByInput";

export type SaaSPlanFindManyArgs = {
  where?: SaaSPlanWhereInput;
  orderBy?: Array<SaaSPlanOrderByInput>;
  skip?: number;
  take?: number;
};
