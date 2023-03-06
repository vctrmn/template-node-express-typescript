import express from 'express';
import helmet from 'helmet';
import routes from './routes';
import morgan from './plugins/morgan';

// Instanciate Express app
const app = express();

// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// Use morgan config for http log
app.use(morgan);

// Configure routes
routes(app);

export default app;
