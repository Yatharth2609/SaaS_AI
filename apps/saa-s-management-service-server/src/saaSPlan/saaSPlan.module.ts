import { Module } from "@nestjs/common";
import { SaaSPlanModuleBase } from "./base/saaSPlan.module.base";
import { SaaSPlanService } from "./saaSPlan.service";
import { SaaSPlanController } from "./saaSPlan.controller";
import { SaaSPlanResolver } from "./saaSPlan.resolver";

@Module({
  imports: [SaaSPlanModuleBase],
  controllers: [SaaSPlanController],
  providers: [SaaSPlanService, SaaSPlanResolver],
  exports: [SaaSPlanService],
})
export class SaaSPlanModule {}
