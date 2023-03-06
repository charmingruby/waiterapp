import ProductsRepository from "../../repositories/ProductsRepository";
import { CreateProductRequest } from "../../interfaces/CreateProductInterface";

export async function createProduct({ name, description, price, category, ingredients, imagePath }:CreateProductRequest) {
  const product = await ProductsRepository.create({
    name,
    description,
    price,
    category,
    ingredients,
    imagePath
  });
  return product;
}
