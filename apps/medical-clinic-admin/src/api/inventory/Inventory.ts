import { Medication } from "../medication/Medication";

export type Inventory = {
  createdAt: Date;
  id: string;
  lastUpdated: Date | null;
  medication?: Medication | null;
  quantity: number | null;
  updatedAt: Date;
};
