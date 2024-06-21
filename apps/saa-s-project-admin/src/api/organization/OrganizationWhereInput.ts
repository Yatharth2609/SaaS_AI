import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrganizationWhereInput = {
  address?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  contactPhone?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
