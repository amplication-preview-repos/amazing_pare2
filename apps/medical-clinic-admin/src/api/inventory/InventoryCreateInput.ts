import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";

export type InventoryCreateInput = {
  lastUpdated?: Date | null;
  medication?: MedicationWhereUniqueInput | null;
  quantity?: number | null;
};
