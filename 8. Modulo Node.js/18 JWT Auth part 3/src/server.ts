import express from "express";
import "express-async-errors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { getAll, getOneById, create, updateById, deleteById, createImage } from "./controllers/planets.js";
import { logIn, signUp, logOut } from "./controllers/users.js";
import multer from "multer";
import authorize from "./authorize.js";
import "./passport.js"

// where and how to save an image
const storage = multer.diskStorage({
  // uploads folder as destination
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  // original name as file name
  filename:(req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

const app = express();
const port = 3000;
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

// `POST /api/planets/:id/image`: add image to a planet selected by id
app.post("/api/planets/:id/image", authorize, upload.single("image"), createImage);

// login
app.post("/api/users/login", logIn);

// signup
app.post("/api/users/signup", signUp);

// logout
app.get("/api/users/logout", authorize, logOut);

app.listen(port, () =>
  console.log(`app listenning to port http://localhost:${port}`)
);
