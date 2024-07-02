import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DiagnosisTitle } from "../diagnosis/DiagnosisTitle";
import { MedicationTitle } from "../medication/MedicationTitle";

export const PrescriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="diagnosis.id"
          reference="Diagnosis"
          label="Diagnosis"
        >
          <SelectInput optionText={DiagnosisTitle} />
        </ReferenceInput>
        <TextInput label="dosage" source="dosage" />
        <TextInput label="frequency" source="frequency" />
        <ReferenceInput
          source="medication.id"
          reference="Medication"
          label="Medication"
        >
          <SelectInput optionText={MedicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
