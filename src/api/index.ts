import axios, { AxiosResponse } from 'axios';

export const sendData = (res: AxiosResponse): any => res.data;

export default {
  cases: {
    getCases: () => axios.get('https://services.it-cron.ru/api/cases').then(sendData),
  },
};
