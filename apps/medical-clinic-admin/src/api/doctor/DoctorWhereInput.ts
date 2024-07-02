import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiagnosisListRelationFilter } from "../diagnosis/DiagnosisListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DoctorWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  diagnoses?: DiagnosisListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  specialization?: StringNullableFilter;
};
