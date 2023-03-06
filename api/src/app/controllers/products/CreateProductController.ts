import { Request, Response } from "express";
import { createProduct } from "../../useCases/products/createProduct";

class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      const imagePath = req.file?.filename as string;
      const { name, description, price, category, ingredients } = req.body;
      const product = await createProduct({ name, description, price, category, ingredients, imagePath })
      return res.status(201).json(product);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}

export default new CreateProductController();

