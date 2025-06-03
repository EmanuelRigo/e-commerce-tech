import { Router } from "express";
import cartsApiRouter from "./carts.router";

const apiRouter = Router();

apiRouter.get("/ping", (_req, res) => {
  res.send("pong 🏓");
});

apiRouter.use("/", cartsApiRouter); // Esto monta /api/patient

export default apiRouter;
