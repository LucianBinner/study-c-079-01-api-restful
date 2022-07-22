import AppError from '@/shared/errors/AppError';
import ProductModel from '../mongoose/model/Product.model';

interface IRequest {
  id: string;
}

export default class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const product = await ProductModel.findOne({ _id: id });
    if (!product) {
      throw new AppError('Product not found.');
    }
    await product.deleteOne({ _id: id });
  }
}
