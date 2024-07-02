import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MEDICATION_TITLE_FIELD } from "./MedicationTitle";
import { DIAGNOSIS_TITLE_FIELD } from "../diagnosis/DiagnosisTitle";

export const MedicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="quantityInStock" source="quantityInStock" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Inventory"
          target="medicationId"
          label="Inventories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="lastUpdated" source="lastUpdated" />
            <ReferenceField
              label="Medication"
              source="medication.id"
              reference="Medication"
            >
              <TextField source={MEDICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Prescription"
          target="medicationId"
          label="Prescriptions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Diagnosis"
              source="diagnosis.id"
              reference="Diagnosis"
            >
              <TextField source={DIAGNOSIS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="dosage" source="dosage" />
            <TextField label="frequency" source="frequency" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Medication"
              source="medication.id"
              reference="Medication"
            >
              <TextField source={MEDICATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Sale"
          target="medicationId"
          label="Sales"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Medication"
              source="medication.id"
              reference="Medication"
            >
              <TextField source={MEDICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
