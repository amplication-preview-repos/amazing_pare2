import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PrescriptionCreateNestedManyWithoutDiagnosesInput } from "./PrescriptionCreateNestedManyWithoutDiagnosesInput";

export type DiagnosisCreateInput = {
  date?: Date | null;
  description?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  prescriptions?: PrescriptionCreateNestedManyWithoutDiagnosesInput;
};
