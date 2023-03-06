import morgan, { StreamOptions } from 'morgan';

import logger from './logger';

// Override the stream method by telling Morgan to use our custom logger
const stream: StreamOptions = {
    // Use the http severity
    write: (message) => logger.http(message),
};

// Build the morgan middleware
export default morgan(
    // Define message format string (this is the default one).
    ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"', // Options: in this case, I overwrote the stream and the skip logic.
    // Options: in this case, I overwrote the stream and the skip logic.
    { stream },
);
