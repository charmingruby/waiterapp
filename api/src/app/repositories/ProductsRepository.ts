import { Product } from "../models/Product";

import { CreateProductRequest } from "../interfaces/CreateProductInterface";

class ProductsRepository {
  async findAll() {
    const products = await Product.find();
    return products;
  }

  async create({ name, description, price, category, ingredients, imagePath }:CreateProductRequest) {
    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients),
      imagePath
    })
    return product;
  }
}

export default new ProductsRepository();
