import { MedicationWhereUniqueInput } from "../medication/MedicationWhereUniqueInput";

export type InventoryUpdateInput = {
  lastUpdated?: Date | null;
  medication?: MedicationWhereUniqueInput | null;
  quantity?: number | null;
};
