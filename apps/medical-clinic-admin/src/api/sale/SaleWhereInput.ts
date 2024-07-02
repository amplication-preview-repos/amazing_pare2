import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SaleWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  medication?: MedicationWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
};
