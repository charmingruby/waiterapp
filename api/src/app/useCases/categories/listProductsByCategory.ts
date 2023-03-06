import { ListProductsByCategoryInterface } from "../../interfaces/ListProductsByCategoryInterface";
import CategoriesRepository from "../../repositories/CategoriesRepository";

export async function listProductsByCategory({ categoryId }:ListProductsByCategoryInterface) {
  const products = await CategoriesRepository.findByCategory({ categoryId });
  return products;
}
