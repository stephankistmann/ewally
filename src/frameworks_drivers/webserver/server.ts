import 'express-async-errors';
import compression from 'compression';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import http from 'http';
import routes from './routes';
import AppError from '../config/appError';

class Server {
  private server: express.Express;

  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(compression());
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(routes);
    this.server.use(
      (err: Error, _: Request, response: Response, __: NextFunction) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json(err);
        }
        return response.status(500).json({
          error: err.message,
        });
      },
    );
  }

  public createHTTP() {
    return http.createServer(this.server);
  }
}

export default Server;
