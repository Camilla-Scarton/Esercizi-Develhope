import { Request, Response } from "express";
import Joi from "joi";

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

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));
  res.status(200).json(planet);
};

// Schema for validation of planet fields (used in row 56 and in row 73)
const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

const create = (req: Request, res: Response) => {
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
};

const updateById = (req: Request, res: Response) => {
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
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((planet) => planet.id !== Number(id));
  res.status(200).json({ msg: "The planet was deleted" });
};

export { getAll, getOneById, create, updateById, deleteById };
