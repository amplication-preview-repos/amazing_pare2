import { Medication } from "../medication/Medication";

export type Sale = {
  createdAt: Date;
  date: Date | null;
  id: string;
  medication?: Medication | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
