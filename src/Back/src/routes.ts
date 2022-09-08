import express from "express";
import userControllers from "./controllers/userControllers";

const router = express.Router();

router.post("/users", userControllers.create);
router.get("/users", userControllers.findAll);
router.get("/users/:UserId", userControllers.findOne);
router.put("/users/:UserId", userControllers.update);
router.delete("/users/:UserId", userControllers.destroy);

export { router };
