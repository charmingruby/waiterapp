import { Request, Response } from 'express';
import { createCategory } from '../../useCases/categories/createCategory';

class CreateCategoryController {
  async handle(req:Request, res:Response) {
    try {
      const { icon, name } = req.body;

      if(!name) return res.status(400).json({
        error: 'Name is required'
      })

      const category = await createCategory({icon, name});
      return res.json(category);
    }
    catch(error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
}

export default new CreateCategoryController();
