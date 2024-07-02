import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";

export type SaleUpdateInput = {
  date?: Date | null;
  medication?: MedicationWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
