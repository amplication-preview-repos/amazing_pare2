import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";
import { Prescription } from "../prescription/Prescription";

export type Diagnosis = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  doctor?: Doctor | null;
  id: string;
  patient?: Patient | null;
  prescriptions?: Array<Prescription>;
  updatedAt: Date;
};
