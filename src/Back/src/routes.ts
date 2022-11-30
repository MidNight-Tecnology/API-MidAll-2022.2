import express from "express";
import userControllers from "./controllers/userControllers";
import assocControllers from "./controllers/assocControllers";
import EmailControllers from "./controllers/emailControllers";
import FilterLinksControllers from "./controllers/filterLinksControllers";
import RelatoriosControllers from "./controllers/relatoriosControllers";
import pdfControllers from "./controllers/pdfControllers";



const router = express.Router();
router.post("/getuseremail", userControllers.userauth);

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
router.get("/getAssocName/:Id", assocControllers.getAssocName);


// essa pros btoa, mas vcs nem vão usar essas
router.post("/createpdf", pdfControllers.create);
router.get("/getpdf", pdfControllers.findAll);
router.get("/getpdf/:Id", pdfControllers.findOne);
router.put("/editpdf/:Id", pdfControllers.update);
router.delete("/deletepdf/:Id", pdfControllers.destroy);


router.post("/createemail", EmailControllers.create);
router.get("/getemail", EmailControllers.findAll);
router.get("/getemail/:Id", EmailControllers.findOne);
router.put("/editemail/:Id", EmailControllers.update);
router.delete("/deleteemail/:Id", EmailControllers.destroy);

router.post("/createfilterlink", FilterLinksControllers.create);
router.get("/getfilterlink", FilterLinksControllers.findAll);
router.get("/getfilterlink/:Id", FilterLinksControllers.findOne);
router.put("/editfilterlink/:Id", FilterLinksControllers.update);
router.delete("/deletefilterlink/:Id", FilterLinksControllers.destroy);

router.post("/createrelatorio", RelatoriosControllers.create);
router.get("/getrelatorio", RelatoriosControllers.findAll);
router.get("/getrelatorio/:Id", RelatoriosControllers.findOne);
router.put("/editrelatorio/:Id", RelatoriosControllers.update);
router.delete("/deleterelatorio/:Id", RelatoriosControllers.destroy);


export { router };
