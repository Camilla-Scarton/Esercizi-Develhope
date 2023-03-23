import express from "express";
import "express-async-errors";
import morgan from "morgan";
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(morgan("dev")); // to log client's request
app.use(express.json()); // to configure the express app to accept json

app.listen(process.env.PORT, () =>
  console.log(`app listenning to port http://localhost:${process.env.PORT}`)
);
