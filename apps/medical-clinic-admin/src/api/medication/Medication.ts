import { Inventory } from "../inventory/Inventory";
import { Prescription } from "../prescription/Prescription";
import { Sale } from "../sale/Sale";

export type Medication = {
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  prescriptions?: Array<Prescription>;
  price: number | null;
  quantityInStock: number | null;
  sales?: Array<Sale>;
  updatedAt: Date;
};
