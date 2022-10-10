import express from "express";
import userControllers from "./controllers/userControllers";
import assocControllers from "./controllers/assocControllers";
import pdfControllers from "./controllers/pdfControllers";



const router = express.Router();
//Essa aqui é pra login
router.post("/createuser", userControllers.create);
router.get("/getuser", userControllers.findAll);
router.get("/getuser/:UserId", userControllers.findOne);
router.put("/edituser/:UserId", userControllers.update);
router.delete("/deleteuser/:UserId", userControllers.destroy);

//Para Associados

router.post('/criassoc', assocControllers.create);
router.get("/getassoc", assocControllers.findAll);
router.get("/getassoc/:Id", assocControllers.findOne);
router.put("/editassoc/:Id", assocControllers.update);
router.delete("/deleteassoc/:Id", assocControllers.destroy);

// essa pros btoa, mas vcs nem vão usar essas
router.post("/createpdf", pdfControllers.create);
router.get("/getpdf", pdfControllers.findAll);
router.get("/getpdf/:Id", pdfControllers.findOne);
router.put("/editpdf/:Id", pdfControllers.update);
router.delete("/deletepdf/:Id", pdfControllers.destroy);

export { router };
