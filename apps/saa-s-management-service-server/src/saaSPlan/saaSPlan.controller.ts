import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SaaSPlanService } from "./saaSPlan.service";
import { SaaSPlanControllerBase } from "./base/saaSPlan.controller.base";

@swagger.ApiTags("saaSPlans")
@common.Controller("saaSPlans")
export class SaaSPlanController extends SaaSPlanControllerBase {
  constructor(protected readonly service: SaaSPlanService) {
    super(service);
  }
}
