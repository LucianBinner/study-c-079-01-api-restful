import AppError from '@/shared/errors/AppError';
import ProductModel from '../mongoose/model/Product.model';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

export default class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<void> {
    const productExists = await ProductModel.findOne({ name });
    if (productExists) {
      throw new AppError('There is already one product with this name!');
    }
    await ProductModel.bulkWrite([
      {
        insertOne: {
          document: { name, price, quantity },
        },
      },
    ]);
  }
}
