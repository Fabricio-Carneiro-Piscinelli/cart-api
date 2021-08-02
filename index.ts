'use strict';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from './config.js';

const app: express.Application = express();

import cartRoute from './routes/cart-route.js';

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', cartRoute.routes);

app.listen(
    config.port,()=>console.log('APP is listinig on url', config.url)
);