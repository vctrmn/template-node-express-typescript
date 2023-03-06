import { createLogger, format, transports } from 'winston';

const {
    combine, colorize, splat, timestamp, printf,
} = format;

const customFormat = combine(
    colorize(),
    splat(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`),
);

export default createLogger({
    level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'debug',
    format: customFormat,
    transports: [new transports.Console()],
});
