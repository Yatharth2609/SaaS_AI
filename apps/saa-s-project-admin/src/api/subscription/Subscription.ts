import { Plan } from "../plan/Plan";
import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  isActive: boolean | null;
  plan?: Plan | null;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
