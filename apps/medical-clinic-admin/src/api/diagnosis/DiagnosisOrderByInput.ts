import { SortOrder } from "../../util/SortOrder";

export type DiagnosisOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
