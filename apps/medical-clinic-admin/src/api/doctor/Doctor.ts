import { Diagnosis } from "../diagnosis/Diagnosis";

export type Doctor = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  diagnoses?: Array<Diagnosis>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  specialization: string | null;
  updatedAt: Date;
};
