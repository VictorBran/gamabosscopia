import { Router } from "express";
import userRoutes from "../../modules/Cliente/routes";
import authRoutes from "../../modules/Auth/routes";
import petRoutes from "../../modules/Pets/routes";
import planRoutes from "../../modules/Plan/routes";

const routes = Router();

routes.use(userRoutes);
routes.use(authRoutes);
routes.use(petRoutes);
routes.use(planRoutes);

export default routes;