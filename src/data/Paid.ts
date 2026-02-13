export interface Paid {
  id: string;
  name: string;
  build: string;
  rent: number;
  status: boolean; // true = Paid, false = Pending
}

export const paidData: Paid[] = [
  {
    id: "1",
    name: "James Martin",
    build: "Home Build 1",
    rent: 1000,
    status: true,
  },
  {
    id: "2",
    name: "Michel Sannter",
    build: "Card View",
    rent: 1500,
    status: false,
  },
  {
    id: "3",
    name: "Carl Jonson",
    build: "Home Build 2",
    rent: 1000,
    status: false,
  },
  {
    id: "4",
    name: "Wade Warren",
    build: "Home Build 1",
    rent: 1000,
    status: true,
  },
];
