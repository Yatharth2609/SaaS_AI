import { SaaSPlan as TSaaSPlan } from "../api/saaSPlan/SaaSPlan";

export const SAASPLAN_TITLE_FIELD = "id";

export const SaaSPlanTitle = (record: TSaaSPlan): string => {
  return record.id?.toString() || String(record.id);
};
