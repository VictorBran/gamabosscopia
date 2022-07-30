import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.get("/novoPlano", controller.createPlan );
routes.put("/atualizarPlano", );

export default routes;