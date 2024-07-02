import { DiagnosisWhereUniqueInput } from "../diagnosis/DiagnosisWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";

export type PrescriptionWhereInput = {
  diagnosis?: DiagnosisWhereUniqueInput;
  dosage?: StringNullableFilter;
  frequency?: StringNullableFilter;
  id?: StringFilter;
  medication?: MedicationWhereUniqueInput;
};
