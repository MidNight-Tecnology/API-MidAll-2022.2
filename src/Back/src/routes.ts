import express from "express";
import userControllers from "./controllers/userControllers";
import assocControllers from "./controllers/assocControllers";
import pdfControllers from "./controllers/pdfControllers";


const router = express.Router();

router.post("/user", userControllers.create);
router.get("/user", userControllers.findAll);
router.get("/user/:UserId", userControllers.findOne);
router.put("/user/:UserId", userControllers.update);
router.delete("/user/:UserId", userControllers.destroy);

router.post("/assoc", assocControllers.create);
router.get("/assoc", assocControllers.findAll);
router.get("/assoc/:Id", assocControllers.findOne);
router.put("/assoc/:Id", assocControllers.update);
router.delete("/assoc/:Id", assocControllers.destroy);

router.post("/pdf", pdfControllers.create);
router.get("/pdf", pdfControllers.findAll);
router.get("/pdf/:Id", pdfControllers.findOne);
router.put("/pdf/:Id", pdfControllers.update);
router.delete("/pdf/:Id", pdfControllers.destroy);

export { router };
