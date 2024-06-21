import { Organization } from "../organization/Organization";
import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  organization?: Organization | null;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
};
