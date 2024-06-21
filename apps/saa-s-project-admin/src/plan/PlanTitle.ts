import { Plan as TPlan } from "../api/plan/Plan";

export const PLAN_TITLE_FIELD = "planName";

export const PlanTitle = (record: TPlan): string => {
  return record.planName?.toString() || String(record.id);
};
