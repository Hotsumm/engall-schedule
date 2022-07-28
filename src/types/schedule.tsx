export type ScheduleType = {
  day: string;
  time: string;
  id: number;
};

export type ScheduleByDayType = Record<string, ScheduleType[]>;
