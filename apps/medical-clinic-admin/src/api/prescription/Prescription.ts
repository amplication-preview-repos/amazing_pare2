import { Diagnosis } from "../diagnosis/Diagnosis";
import { Medication } from "../medication/Medication";

export type Prescription = {
  createdAt: Date;
  diagnosis?: Diagnosis | null;
  dosage: string | null;
  frequency: string | null;
  id: string;
  medication?: Medication | null;
  updatedAt: Date;
};
