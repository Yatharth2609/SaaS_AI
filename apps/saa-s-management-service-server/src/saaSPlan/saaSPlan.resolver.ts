import * as graphql from "@nestjs/graphql";
import { SaaSPlanResolverBase } from "./base/saaSPlan.resolver.base";
import { SaaSPlan } from "./base/SaaSPlan";
import { SaaSPlanService } from "./saaSPlan.service";

@graphql.Resolver(() => SaaSPlan)
export class SaaSPlanResolver extends SaaSPlanResolverBase {
  constructor(protected readonly service: SaaSPlanService) {
    super(service);
  }
}
