import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaaSPlanServiceBase } from "./base/saaSPlan.service.base";

@Injectable()
export class SaaSPlanService extends SaaSPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
