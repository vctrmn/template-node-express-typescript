import app from './app';
import logger from './plugins/logger';

const HTTP_PORT = 5001;

// Start App
app.listen(HTTP_PORT, () => logger.info(`HTTP Server listening on port ${HTTP_PORT}`));
