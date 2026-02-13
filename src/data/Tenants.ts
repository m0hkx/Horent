import { faker } from '@faker-js/faker';

export interface Tenant {
  avatar: string;
  name: string;
  address: string;
  rent: string;
  time: string;
}

export const Tenants: Tenant[] = [
  {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    address: "Syracuse, Connecticut 35624",
    rent: "$1,200",
    time: "1 Week Ago",
  },
  {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    address: "Rd. Santa Ana, Illinois 85486",
    rent: "$3,500",
    time: "2 Weeks Ago",
  },
  {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    address: "Dr. Richardson, California 62639",
    rent: "$2,500",
    time: "2 Weeks Ago",
  },
  {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    address: "St. Utica, Pennsylvania 57867",
    rent: "$1,500",
    time: "3 Weeks Ago",
  },
  {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    address: "Rd. Santa Ana, Illinois 85486",
    rent: "$3,500",
    time: "2 Week Ago",
  },
  {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    address: "St. Celina, Delaware 10299",
    rent: "$2,000",
    time: "1 Month Ago",
  },
  {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    address: "Cir. Shiloh, Hawaii 81063",
    rent: "$3,000",
    time: "2 Months Ago",
  },
];