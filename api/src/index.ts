import express, { Application } from 'express';
import mongoose from 'mongoose';

import Router from './router';

const app: Application = express();

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('💾 Mongo connected');

    app.use(express.json());

    app.use(Router.ProductRouter);
    app.use(Router.CategoryRouter);
    app.use(Router.OrderRouter);

    const port = 3001;
    app.listen(port, () => console.log(`📦 Server is running on: http://localhost:${port}`));
  })
  .catch(() => console.log('💾 Error while connecting with Mongo'));

