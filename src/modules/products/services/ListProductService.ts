import { Product } from '../entities/Product';
import ProductModel from '../mongoose/model/Product.model';

export default class ListProductService {
  public async execute(): Promise<Product[]> {
    const products = (await ProductModel.find({})) as Product[];
    return products;
  }
}
