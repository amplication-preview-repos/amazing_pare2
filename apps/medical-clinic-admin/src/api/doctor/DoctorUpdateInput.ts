import { DiagnosisUpdateManyWithoutDoctorsInput } from "./DiagnosisUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  address?: string | null;
  contactNumber?: string | null;
  diagnoses?: DiagnosisUpdateManyWithoutDoctorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  specialization?: string | null;
};
