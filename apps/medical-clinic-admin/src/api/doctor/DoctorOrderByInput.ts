import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  address?: SortOrder;
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
