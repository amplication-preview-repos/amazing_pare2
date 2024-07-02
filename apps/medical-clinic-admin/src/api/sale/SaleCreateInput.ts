import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";

export type SaleCreateInput = {
  date?: Date | null;
  medication?: MedicationWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
