import ProductsRepository from "../../repositories/ProductsRepository";

export async function listProducts() {
  const products = await ProductsRepository.findAll();
  return products;
}
