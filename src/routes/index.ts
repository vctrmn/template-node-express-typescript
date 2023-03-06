import { Application, Request, Response } from 'express';

export default (app: Application): void => {
    app.get('/', (req: Request, res: Response) => {
        res.status(204).send();
    });

    app.get('/hello', (req: Request, res: Response) => {
        res.status(200).send({ Hello: 'World' });
    });

    app.get('*', (req: Request, res: Response) => {
        res.status(404).send({ error: 'Not Found' });
    });
};
