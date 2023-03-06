import { Request, Response } from "express";

import { listProducts } from "../../useCases/products/listProducts";

class ListProductsController {
  async handle(req:Request, res:Response) {
    try {
      const products = await listProducts();
      return res.json(products)
    } catch(error) {
      console.log(error)
      res.sendStatus(500)
    }
  }
}

export default new ListProductsController();
