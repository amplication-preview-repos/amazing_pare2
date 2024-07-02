import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  lastUpdated?: DateTimeNullableFilter;
  medication?: MedicationWhereUniqueInput;
  quantity?: IntNullableFilter;
};
