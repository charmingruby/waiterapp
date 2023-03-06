import { Request, Response } from "express";
import { listProductsByCategory } from "../../useCases/categories/listProductsByCategory";

class ListProductsByCategoryController{
  async handle(req:Request, res:Response) {
    const { categoryId } = req.params;
    const products = await listProductsByCategory({ categoryId });
    return res.json(products);
  }
}

export default new ListProductsByCategoryController();
