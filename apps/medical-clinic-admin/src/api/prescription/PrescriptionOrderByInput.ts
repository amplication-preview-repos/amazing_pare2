import { SortOrder } from "../../util/SortOrder";

export type PrescriptionOrderByInput = {
  createdAt?: SortOrder;
  diagnosisId?: SortOrder;
  dosage?: SortOrder;
  frequency?: SortOrder;
  id?: SortOrder;
  medicationId?: SortOrder;
  updatedAt?: SortOrder;
};
