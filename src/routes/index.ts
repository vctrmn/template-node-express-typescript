import { Application, Request, Response } from 'express';
import logger from '../plugins/logger';

export default (app: Application): void => {
    app.get('/', (req: Request, res: Response) => {
        res.status(204).send();
    });

    app.get('/request', (req: Request, res: Response) => {
        const result = {
            type: 'GET',
            queryParams: req.query,
            payload: req.body,
        };
        logger.info(JSON.stringify(result));
        res.status(200).send(result);
    });

    app.post('/request', (req: Request, res: Response) => {
        const result = {
            type: 'POST',
            queryParams: req.query,
            payload: req.body,
        };
        logger.info(JSON.stringify(result));
        res.status(200).send(result);
    });

    app.get('*', (req: Request, res: Response) => {
        res.status(404).send({ error: 'Not Found' });
    });
};
