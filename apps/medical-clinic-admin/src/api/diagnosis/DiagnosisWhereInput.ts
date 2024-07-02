import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PrescriptionListRelationFilter } from "../prescription/PrescriptionListRelationFilter";

export type DiagnosisWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  prescriptions?: PrescriptionListRelationFilter;
};
