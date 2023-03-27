var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Joi from "joi";
import pgPromise from "pg-promise";
// connection to database
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/video");
// table creation and filling
const setupDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db.none(`
    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT
    );
  `);
    yield db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
    yield db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
    /* We can select all the planets and print them in console, when function is called at row 28.
    const planets = await db.many(`SELECT * FROM plantets;`);
    console.log(planets);
    */
});
setupDb();
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planets = yield db.many(`SELECT * FROM plantets;`);
    res.status(200).json(planets);
});
const getOneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // "oneOrNone" gives us null if we put an id not present in the db ("one" gives us an error)
    const planet = yield db.oneOrNone(`SELECT * FROM plantets WHERE id=$1;`, Number(id));
    res.status(200).json(planet);
});
// Schema for validation of planet fields (used in row 53 and in row 68)
const planetSchema = Joi.object({
    //id: Joi.number().integer().required(), <- id is now serial: integer + auto-incremented
    name: Joi.string().required(),
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const newPlanet = { name };
    // validation with Joi happens before validation in db -> faster response
    const validatedNewPlanet = planetSchema.validate(newPlanet);
    if (validatedNewPlanet.error) {
        res.status(400).json({ msg: validatedNewPlanet.error.details[0].message });
    }
    else {
        yield db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
        res.status(201).json({ msg: "The planet was created" });
    }
});
const updateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    // validation with Joi happens before validation in db -> faster response
    const validatedNewPlanet = planetSchema.validate({ name });
    if (validatedNewPlanet.error) {
        res.status(400).json({ msg: validatedNewPlanet.error.details[0].message });
    }
    else {
        yield db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
        res.status(200).json({ msg: "The planet was updated" });
    }
});
const deleteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield db.none(`DELETE FROM planets WHERE id=$1`, Number(id));
    res.status(200).json({ msg: "The planet was deleted" });
});
const createImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const fileName = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    if (fileName) {
        db.none(`UPDATE planets SET image=$2 WHERE id=$1;`, [id, fileName]);
        res.status(201).json({ msg: "Planet image was uploaded" });
    }
    else {
        res.status(400).json({ msg: "Planet image was NOT uploaded" });
    }
});
export { getAll, getOneById, create, updateById, deleteById, createImage };
