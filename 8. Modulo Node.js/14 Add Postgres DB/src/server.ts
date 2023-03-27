import express from "express";
import "express-async-errors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { getAll, getOneById, create, updateById, deleteById } from "./controllers/planets.js"

const app = express();
dotenv.config();

app.use(morgan("dev")); // to log client's request
app.use(express.json()); // to configure the express app to accept json

// `GET /api/planets`: return all planets (JSON) with `200`
app.get("/api/planets", getAll);

// `GET /api/planets/:id`: return a planet (JSON) by id with `200`
app.get("/api/planets/:id", getOneById);

// `POST /api/planets`: create a planet, with valid input return `201` code and a success JSON with key `msg`
app.post("/api/planets", create);

// `PUT /api/planets/:id`: update a planet by id, with valid input return `200` code and a success JSON with key `msg`
app.put("/api/planets/:id", updateById);

// `DELETE /api/planets/:id`: delete a planet by id, return only `200` code and a success JSON with key `msg`
app.delete("/api/planets/:id", deleteById);

app.listen(process.env.PORT, () =>
  console.log(`app listenning to port http://localhost:${process.env.PORT}`)
);
