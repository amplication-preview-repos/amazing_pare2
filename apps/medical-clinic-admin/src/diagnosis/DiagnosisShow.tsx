import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DIAGNOSIS_TITLE_FIELD } from "./DiagnosisTitle";
import { MEDICATION_TITLE_FIELD } from "../medication/MedicationTitle";
import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const DiagnosisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="description" source="description" />
        <ReferenceField label="Doctor" source="doctor.id" reference="Doctor">
          <TextField source={DOCTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Prescription"
          target="diagnosisId"
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
      </SimpleShowLayout>
    </Show>
  );
};
