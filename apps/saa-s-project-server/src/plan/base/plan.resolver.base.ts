/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Plan } from "./Plan";
import { PlanCountArgs } from "./PlanCountArgs";
import { PlanFindManyArgs } from "./PlanFindManyArgs";
import { PlanFindUniqueArgs } from "./PlanFindUniqueArgs";
import { CreatePlanArgs } from "./CreatePlanArgs";
import { UpdatePlanArgs } from "./UpdatePlanArgs";
import { DeletePlanArgs } from "./DeletePlanArgs";
import { SubscriptionFindManyArgs } from "../../subscription/base/SubscriptionFindManyArgs";
import { Subscription } from "../../subscription/base/Subscription";
import { PlanService } from "../plan.service";
@graphql.Resolver(() => Plan)
export class PlanResolverBase {
  constructor(protected readonly service: PlanService) {}

  async _plansMeta(
    @graphql.Args() args: PlanCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Plan])
  async plans(@graphql.Args() args: PlanFindManyArgs): Promise<Plan[]> {
    return this.service.plans(args);
  }

  @graphql.Query(() => Plan, { nullable: true })
  async plan(@graphql.Args() args: PlanFindUniqueArgs): Promise<Plan | null> {
    const result = await this.service.plan(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Plan)
  async createPlan(@graphql.Args() args: CreatePlanArgs): Promise<Plan> {
    return await this.service.createPlan({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Plan)
  async updatePlan(@graphql.Args() args: UpdatePlanArgs): Promise<Plan | null> {
    try {
      return await this.service.updatePlan({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Plan)
  async deletePlan(@graphql.Args() args: DeletePlanArgs): Promise<Plan | null> {
    try {
      return await this.service.deletePlan(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Subscription], { name: "subscriptions" })
  async findSubscriptions(
    @graphql.Parent() parent: Plan,
    @graphql.Args() args: SubscriptionFindManyArgs
  ): Promise<Subscription[]> {
    const results = await this.service.findSubscriptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}