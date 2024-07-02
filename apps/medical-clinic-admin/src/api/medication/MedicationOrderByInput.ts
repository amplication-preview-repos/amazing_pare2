import { SortOrder } from "../../util/SortOrder";

export type MedicationOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantityInStock?: SortOrder;
  updatedAt?: SortOrder;
};
