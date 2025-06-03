import { Router, Request, Response, NextFunction } from "express";
import cartDao from "../../data/mongo/cart.dao";

const cartsApiRouter = Router();

cartsApiRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const response: any = await cartDao.create(data);
      const message = "PRODUCT CREATED";
      res.status(200).json({ response, message });
    } catch (error) {
      next(error);
    }
  }
);

cartsApiRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: any[] = await cartDao.getAll();
      const message = "GET /api/patient";
      res.status(200).json({ response, message });
    } catch (error) {
      next(error);
    }
  }
);

export default cartsApiRouter;
