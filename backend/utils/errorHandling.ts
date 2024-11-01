import { Request, Response, NextFunction } from 'express';
import * as artifactController from '../controllers/artifactController';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });


console.log(artifactController); // Check if the function is listed here

};
