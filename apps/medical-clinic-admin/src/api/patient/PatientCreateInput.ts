import { DiagnosisCreateNestedManyWithoutPatientsInput } from "./DiagnosisCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  address?: string | null;
  contactNumber?: string | null;
  dateOfBirth?: Date | null;
  diagnoses?: DiagnosisCreateNestedManyWithoutPatientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
