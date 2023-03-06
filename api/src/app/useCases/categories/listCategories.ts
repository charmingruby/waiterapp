import CategoriesRepository from '../../repositories/CategoriesRepository';

export async function listCategories() {
  const categories = await CategoriesRepository.findAll();
  return categories;
}
