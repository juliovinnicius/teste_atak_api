import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import * as routes from './resource/routes';

// Cria o app

export const app = express();

// Configuração dos middlewares

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

routes.register(app);

//integra o endpoint na aplicação
