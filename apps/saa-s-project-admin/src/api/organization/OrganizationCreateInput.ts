import { UserCreateNestedManyWithoutOrganizationsInput } from "./UserCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  address?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutOrganizationsInput;
};
