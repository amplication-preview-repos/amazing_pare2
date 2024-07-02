import { InventoryUpdateManyWithoutMedicationsInput } from "./InventoryUpdateManyWithoutMedicationsInput";
import { PrescriptionUpdateManyWithoutMedicationsInput } from "./PrescriptionUpdateManyWithoutMedicationsInput";
import { SaleUpdateManyWithoutMedicationsInput } from "./SaleUpdateManyWithoutMedicationsInput";

export type MedicationUpdateInput = {
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutMedicationsInput;
  name?: string | null;
  prescriptions?: PrescriptionUpdateManyWithoutMedicationsInput;
  price?: number | null;
  quantityInStock?: number | null;
  sales?: SaleUpdateManyWithoutMedicationsInput;
};
