export interface WeeklyStat {
  day: string;
  containerHeight: number;
  valueHeight: number;
}

export const weeklyData: WeeklyStat[] = [
  { day: "Sat", containerHeight: 70, valueHeight: 60 },
  { day: "Sun", containerHeight: 50, valueHeight: 60 },
  { day: "Mon", containerHeight: 70, valueHeight: 70 },
  { day: "Tue", containerHeight: 100, valueHeight: 80 },
  { day: "Wed", containerHeight: 60, valueHeight: 70 },
  { day: "Thu", containerHeight: 40, valueHeight: 65 },
  { day: "Fri", containerHeight: 50, valueHeight: 80 },
];
