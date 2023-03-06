import { Request, Response } from 'express';
import { listCategories } from '../../useCases/categories/listCategories';

class ListCategoriesController {
  async handle(req:Request, res:Response) {
    try {
      const categories = await listCategories();
      return res.json(categories);
    }
    catch(error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
}

export default new ListCategoriesController();
