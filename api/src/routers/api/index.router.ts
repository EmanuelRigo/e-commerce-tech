import { Router } from "express";
import patientsApiRouter from "./patients.router";

const apiRouter = Router();

apiRouter.get("/ping", (_req, res) => {
  res.send("pong 🏓");
});

apiRouter.use("/carts", CartsApiRouter); // Esto monta /api/patient

export default apiRouter;
