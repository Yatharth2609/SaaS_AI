import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PlanTitle } from "../plan/PlanTitle";
import { UserTitle } from "../user/UserTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
