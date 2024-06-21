import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PlanTitle } from "../plan/PlanTitle";
import { UserTitle } from "../user/UserTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="endDate" source="endDate" />
        <BooleanInput label="isActive" source="isActive" />
        <ReferenceInput source="plan.id" reference="Plan" label="plan">
          <SelectInput optionText={PlanTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
