import { InventoryCreateNestedManyWithoutMedicationsInput } from "./InventoryCreateNestedManyWithoutMedicationsInput";
import { PrescriptionCreateNestedManyWithoutMedicationsInput } from "./PrescriptionCreateNestedManyWithoutMedicationsInput";
import { SaleCreateNestedManyWithoutMedicationsInput } from "./SaleCreateNestedManyWithoutMedicationsInput";

export type MedicationCreateInput = {
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutMedicationsInput;
  name?: string | null;
  prescriptions?: PrescriptionCreateNestedManyWithoutMedicationsInput;
  price?: number | null;
  quantityInStock?: number | null;
  sales?: SaleCreateNestedManyWithoutMedicationsInput;
};
