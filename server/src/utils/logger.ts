import { pino } from 'pino';
import dayjs from 'dayjs';

const log = pino({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format('DD-MM-YYYY HH:mm:ss')}"`,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: false,
    },
  },
});

export default log;
