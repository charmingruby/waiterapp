import express, { Application } from 'express';
import mongoose from 'mongoose';
import path from "path";
import cors from 'cors';
import http from "node:http";
import { Server } from 'socket.io';

import Routes from './routes';

const app: Application = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('🟩 Mongo connected');

    app.use(cors());
    app.use('/uploads', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
    app.use(express.json());

    app.use(Routes.ProductRoutes);
    app.use(Routes.CategoryRoutes);
    app.use(Routes.OrderRoutes);

    const port = 3002;
    server.listen(port, () => console.log(`📦 Server is running on: http://localhost:${port}`));
  })
  .catch(() => console.log('🟥 Error while connecting with Mongo'));
