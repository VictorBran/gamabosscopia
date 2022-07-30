import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/cadastrarPet", controller.createPet );
routes.put("/editarPet", controller.editPet )

export default routes;