import { Category } from '../models/Category';
import { Product } from '../models/Product';

import { CreateCategoryRequest } from '../interfaces/CreateCategoryInterface';
import { ListProductsByCategoryInterface } from '../interfaces/ListProductsByCategoryInterface';

class CategoriesRepository {
  async findAll() {
    const categories = await Category.find();
    return categories;
  }

  async findByCategory({ categoryId }:ListProductsByCategoryInterface) {
    const categories = await Product.find().where('category').equals(categoryId);
    return categories;
  }

  async create({icon, name}: CreateCategoryRequest) {
    const category = await Category.create({
      icon,
      name
    });
    return category;
  }
}

export default new CategoriesRepository();
