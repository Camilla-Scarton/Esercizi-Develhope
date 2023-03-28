import { Request, Response } from "express";
import Joi from "joi";
import { db } from "./../db.js";

const getAll = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM plantets;`);
  res.status(200).json(planets);
};

const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  // "oneOrNone" gives us null if we put an id not present in the db ("one" gives us an error)
  const planet = await db.oneOrNone(`SELECT * FROM plantets WHERE id=$1;`, Number(id)); 
  res.status(200).json(planet);
};

// Schema for validation of planet fields (used in row 53 and in row 68)
const planetSchema = Joi.object({
  //id: Joi.number().integer().required(), <- id is now serial: integer + auto-incremented
  name: Joi.string().required(),
});

const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newPlanet = { name };

  // validation with Joi happens before validation in db -> faster response
  const validatedNewPlanet = planetSchema.validate(newPlanet);

  if (validatedNewPlanet.error) {
    res.status(400).json({ msg: validatedNewPlanet.error.details[0].message });
  } else {
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
    res.status(201).json({ msg: "The planet was created" });
  }
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  // validation with Joi happens before validation in db -> faster response
  const validatedNewPlanet = planetSchema.validate({ name });

  if (validatedNewPlanet.error) {
    res.status(400).json({ msg: validatedNewPlanet.error.details[0].message });
  } else {
    await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
    res.status(200).json({ msg: "The planet was updated" });
  }
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));
  res.status(200).json({ msg: "The planet was deleted" });
};

const createImage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const fileName = req.file?.path

  if (fileName) {
    db.none(`UPDATE planets SET image=$2 WHERE id=$1;`, [id, fileName]);
    res.status(201).json({ msg: "Planet image was uploaded" });
  } else {
    res.status(400).json({ msg: "Planet image was NOT uploaded" });
  }
}

export { getAll, getOneById, create, updateById, deleteById, createImage };
