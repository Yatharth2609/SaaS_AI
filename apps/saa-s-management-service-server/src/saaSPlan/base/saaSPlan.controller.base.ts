/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SaaSPlanService } from "../saaSPlan.service";
import { SaaSPlanCreateInput } from "./SaaSPlanCreateInput";
import { SaaSPlan } from "./SaaSPlan";
import { SaaSPlanFindManyArgs } from "./SaaSPlanFindManyArgs";
import { SaaSPlanWhereUniqueInput } from "./SaaSPlanWhereUniqueInput";
import { SaaSPlanUpdateInput } from "./SaaSPlanUpdateInput";

export class SaaSPlanControllerBase {
  constructor(protected readonly service: SaaSPlanService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SaaSPlan })
  async createSaaSPlan(
    @common.Body() data: SaaSPlanCreateInput
  ): Promise<SaaSPlan> {
    return await this.service.createSaaSPlan({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SaaSPlan] })
  @ApiNestedQuery(SaaSPlanFindManyArgs)
  async saaSPlans(@common.Req() request: Request): Promise<SaaSPlan[]> {
    const args = plainToClass(SaaSPlanFindManyArgs, request.query);
    return this.service.saaSPlans({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SaaSPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async saaSPlan(
    @common.Param() params: SaaSPlanWhereUniqueInput
  ): Promise<SaaSPlan | null> {
    const result = await this.service.saaSPlan({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SaaSPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSaaSPlan(
    @common.Param() params: SaaSPlanWhereUniqueInput,
    @common.Body() data: SaaSPlanUpdateInput
  ): Promise<SaaSPlan | null> {
    try {
      return await this.service.updateSaaSPlan({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SaaSPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSaaSPlan(
    @common.Param() params: SaaSPlanWhereUniqueInput
  ): Promise<SaaSPlan | null> {
    try {
      return await this.service.deleteSaaSPlan({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}