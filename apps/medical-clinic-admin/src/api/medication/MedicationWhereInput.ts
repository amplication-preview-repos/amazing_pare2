import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { PrescriptionListRelationFilter } from "../prescription/PrescriptionListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";

export type MedicationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  prescriptions?: PrescriptionListRelationFilter;
  price?: FloatNullableFilter;
  quantityInStock?: IntNullableFilter;
  sales?: SaleListRelationFilter;
};
