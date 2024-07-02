import { Diagnosis } from "../diagnosis/Diagnosis";

export type Patient = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  diagnoses?: Array<Diagnosis>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
