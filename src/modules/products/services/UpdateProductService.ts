import AppError from '@/shared/errors/AppError';
import ProductModel from '../mongoose/model/Product.model';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default class UpdateProductService {
  public async execute({ id, name, price, quantity }: IRequest): Promise<void> {
    const product = await ProductModel.findById(id);
    if (!product) {
      throw new AppError('Product not found.');
    }
    const productExists = await ProductModel.findOne({ name });
    if (productExists && name !== product.name) {
      throw new AppError('There is already one product with this name!');
    }
    await ProductModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          name,
          price,
          quantity,
        },
      },
    );
  }
}
