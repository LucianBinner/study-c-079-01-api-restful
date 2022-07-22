import AppError from '@/shared/errors/AppError';
import { Product } from '../entities/Product';
import ProductModel from '../mongoose/model/Product.model';

interface IRequest {
  id: string;
}

export default class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const product = (await ProductModel.findOne({ _id: id })) as Product;
    if (!product) {
      throw new AppError('Product not found.');
    }
    return product;
  }
}
