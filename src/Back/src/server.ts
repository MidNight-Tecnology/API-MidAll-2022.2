import { db } from "./database/db";
import express, { json } from "express";
import { router } from "./routes";


const cors = require("cors");

const app = express();
app.use(json());
app.use(cors())
app.use(router);

app.listen(4512, async () => {
  await db.sync();
  console.log(`App ${process.env.PROJECT_NAME} Running at 4512!`);
});
