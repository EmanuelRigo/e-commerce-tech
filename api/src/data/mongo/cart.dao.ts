import CartModel from "./model/cart.model";

class CartDao {
  async getAll(): Promise<Record<string, any>[]> {
    return await CartModel.find().lean();
  }

  async getById(id: string): Promise<Record<string, any> | null> {
    return await CartModel.findById(id).lean();
  }

  async getByIdAPI(id: string): Promise<Record<string, any> | null> {
    return await CartModel.findOne({ id }).lean();
  }

  async create(data: Record<string, any>): Promise<Record<string, any>> {
    return await CartModel.create(data);
  }

  async update(
    id: string,
    data: Record<string, any>
  ): Promise<Record<string, any> | null> {
    return await CartModel.findByIdAndUpdate(id, data, { new: true }).lean();
  }

  async deleteOne(id: string): Promise<Record<string, any> | null> {
    return await CartModel.findByIdAndDelete(id).lean();
  }
}

const cartDao = new CartDao();
export default cartDao;
