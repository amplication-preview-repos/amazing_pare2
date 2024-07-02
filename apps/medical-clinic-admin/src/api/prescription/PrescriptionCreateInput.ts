import { DiagnosisWhereUniqueInput } from "../diagnosis/DiagnosisWhereUniqueInput";
import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";

export type PrescriptionCreateInput = {
  diagnosis?: DiagnosisWhereUniqueInput | null;
  dosage?: string | null;
  frequency?: string | null;
  medication?: MedicationWhereUniqueInput | null;
};
