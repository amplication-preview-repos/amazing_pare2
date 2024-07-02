import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DIAGNOSIS_TITLE_FIELD } from "../diagnosis/DiagnosisTitle";
import { MEDICATION_TITLE_FIELD } from "../medication/MedicationTitle";

export const PrescriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
