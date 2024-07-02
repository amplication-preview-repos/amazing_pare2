import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PrescriptionUpdateManyWithoutDiagnosesInput } from "./PrescriptionUpdateManyWithoutDiagnosesInput";

export type DiagnosisUpdateInput = {
  date?: Date | null;
  description?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  prescriptions?: PrescriptionUpdateManyWithoutDiagnosesInput;
};
