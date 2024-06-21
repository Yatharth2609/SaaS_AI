import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  address?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutOrganizationsInput;
};
