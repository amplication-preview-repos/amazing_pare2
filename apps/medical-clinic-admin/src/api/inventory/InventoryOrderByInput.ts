import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastUpdated?: SortOrder;
  medicationId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
