import axios from 'axios';
import { ScheduleType } from '../types/schedule';

const BASE_URL = 'http://localhost:4000';

export const getSchedules = async () => {
  const response = await axios.get(`${BASE_URL}/schedules`);
  return response.data;
};

export const postSchedules = async (data: ScheduleType) => {
  await axios.post(`${BASE_URL}/schedules`, data);
};

export const deleteScheduleById = async (id: number) => {
  await axios.delete(`${BASE_URL}/schedules/${id}`);
};
