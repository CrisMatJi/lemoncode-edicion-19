export interface OrderHeader {
  number: string;
  supplier: string;
  date: string;
}

export interface OrderLine {
  id: string;
  description: string;
  amount: number;
  validated: boolean;
}

export interface Order {
  header: OrderHeader;
  lines: OrderLine[];
}

export const createEmptyOrder = (): Order => ({
  header: { number: "", supplier: "", date: "" },
  lines: [],
});
