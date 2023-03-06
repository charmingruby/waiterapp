import { CreateCategoryRequest } from '../../interfaces/CreateCategoryInterface';
import CategoriesRepository from '../../repositories/CategoriesRepository';

export async function createCategory({ icon, name }: CreateCategoryRequest) {
  const category = await CategoriesRepository.create({ icon, name });
  return category;
}
