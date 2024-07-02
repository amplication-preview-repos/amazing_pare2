import { DiagnosisCreateNestedManyWithoutDoctorsInput } from "./DiagnosisCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  address?: string | null;
  contactNumber?: string | null;
  diagnoses?: DiagnosisCreateNestedManyWithoutDoctorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  specialization?: string | null;
};
