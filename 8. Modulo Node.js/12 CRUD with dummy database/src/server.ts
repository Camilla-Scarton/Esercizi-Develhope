import express from "express";
import "express-async-errors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import Joi from "joi";

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

// `GET /api/planets`: return all planets (JSON) with `200`
app.get("/api/planets", (req: express.Request, res: express.Response) => {
  res.status(200).json(planets);
});

// `GET /api/planets/:id`: return a planet (JSON) by id with `200`
app.get("/api/planets/:id", (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));
  res.status(200).json(planet);
});

// Schema for validation of planet fields (used in row 56 and in row 73)
const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

// `POST /api/planets`: create a planet, with valid input return `201` code and a success JSON with key `msg`
app.post("/api/planets", (req: express.Request, res: express.Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };

  // validation
  const validatedNewPlanet = planetSchema.validate(newPlanet);

  if (validatedNewPlanet.error) {
    res.status(400).json({ msg: validatedNewPlanet.error.details[0].message });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "The planet was created" });
  }
});

// `PUT /api/planets/:id`: update a planet by id, with valid input return `200` code and a success JSON with key `msg`
app.put("/api/planets/:id", (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { name } = req.body;

  // validation
  const validatedNewPlanet = planetSchema.validate({ id, name });

  if (validatedNewPlanet.error) {
    res.status(400).json({ msg: validatedNewPlanet.error.details[0].message });
  } else {
    planets = planets.map((planet) =>
      planet.id === Number(id) ? { ...planet, name } : planet
    );
    res.status(200).json({ msg: "The planet was updated" });
  }
});

// `DELETE /api/planets/:id`: delete a planet by id, return only `200` code and a success JSON with key `msg`
app.delete("/api/planets/:id", (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  planets = planets.filter((planet) => planet.id !== Number(id));
  res.status(200).json({ msg: "The planet was deleted" });
});

app.listen(process.env.PORT, () =>
  console.log(`app listenning to port http://localhost:${process.env.PORT}`)
);
