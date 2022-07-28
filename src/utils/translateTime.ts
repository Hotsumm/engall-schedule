type GetTimeParams = {
  newTimePoint: 'AM' | 'PM';
  hour: number;
  minites: number;
};

const CLASS_TIME = 40;

const timeToMinites = (time: string, timePoint: string): number => {
  const [hour, minites]: number[] = time.split(':').map(time => Number(time));
  const totalMinites: number =
    timePoint === 'PM' ? (hour + 12) * 60 + minites : hour * 60 + minites;
  return totalMinites;
};

const checkIsPM = (hour: number): boolean => {
  if (hour >= 12) return true;
  return false;
};

const addZeroToTime = (time: number): string => `0${time}`;

const getTime = (totalMinites: number): GetTimeParams => {
  const hour =
    parseInt(String(totalMinites / 60)) % 12 === 0
      ? 12
      : parseInt(String(totalMinites / 60)) % 12;
  const minites = parseInt(String(totalMinites % 60));
  const newTimePoint = checkIsPM(totalMinites / 60) ? 'PM' : 'AM';

  return { hour, minites, newTimePoint };
};

export const getStartToEndTime = (startTime: string) => {
  const timePoint = startTime.slice(-2);
  const totalMinites: number =
    timeToMinites(startTime.slice(0, 6), timePoint) + CLASS_TIME;

  const { hour, minites, newTimePoint } = getTime(totalMinites);

  const stringHour: string = hour < 10 ? addZeroToTime(hour) : String(hour);
  const stringMinites = minites < 10 ? addZeroToTime(minites) : String(minites);

  return `${stringHour}:${stringMinites} ${newTimePoint}`;
};
