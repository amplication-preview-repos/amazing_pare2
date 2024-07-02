import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DIAGNOSIS_TITLE_FIELD } from "../diagnosis/DiagnosisTitle";
import { MEDICATION_TITLE_FIELD } from "../medication/MedicationTitle";

export const PrescriptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Prescriptions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
