import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  // Middleware que intercepta todos os erros gerados na aplicação
  if (error instanceof AppError) {
    // Verifica se o erro gerado é uma intancia de AppError
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    // Se a o erro não for uma intancia de AppError é gerado um server error genérico
    status: 'error',
    message: 'Internal server error!',
  });
});

app.listen(3333, () => {
  console.log('Server stater on port 3333!');
});
