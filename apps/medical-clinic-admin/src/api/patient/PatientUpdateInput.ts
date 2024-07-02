import { DiagnosisUpdateManyWithoutPatientsInput } from "./DiagnosisUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  address?: string | null;
  contactNumber?: string | null;
  dateOfBirth?: Date | null;
  diagnoses?: DiagnosisUpdateManyWithoutPatientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
