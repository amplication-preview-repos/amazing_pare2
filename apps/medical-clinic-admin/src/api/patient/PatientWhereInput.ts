import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DiagnosisListRelationFilter } from "../diagnosis/DiagnosisListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  diagnoses?: DiagnosisListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
