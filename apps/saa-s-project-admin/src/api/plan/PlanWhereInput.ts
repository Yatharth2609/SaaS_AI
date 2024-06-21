import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type PlanWhereInput = {
  description?: StringNullableFilter;
  durationDays?: IntNullableFilter;
  id?: StringFilter;
  numberOfUsers?: IntNullableFilter;
  planName?: StringNullableFilter;
  price?: FloatNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
