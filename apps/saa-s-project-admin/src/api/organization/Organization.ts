import { User } from "../user/User";

export type Organization = {
  address: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
