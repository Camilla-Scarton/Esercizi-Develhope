import express from "express";
import "express-async-errors";
import morgan from "morgan";
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(morgan("dev")); // to log client's request
app.use(express.json()); // to configure the express app to accept json

// simple database
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.listen(process.env.PORT, () =>
  console.log(`app listenning to port http://localhost:${process.env.PORT}`)
);
