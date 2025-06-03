import ClientModel from "./model/client.model";
import { ObjectId } from "mongoose";

class ClientDao {
  async getAll(): Promise<Record<string, any>[]> {
    return await ClientModel.find().lean();
  }

  async getById(id: string): Promise<Record<string, any> | null> {
    return await ClientModel.findById(id).lean();
  }

  async getByIdAPI(id: string): Promise<Record<string, any> | null> {
    return await ClientModel.findOne({ id }).lean();
  }

  async create(data: Record<string, any>): Promise<Record<string, any>> {
    return await ClientModel.create(data);
  }

  async update(
    id: string,
    data: Record<string, any>
  ): Promise<Record<string, any> | null> {
    return await ClientModel.findByIdAndUpdate(id, data, { new: true }).lean();
  }

  async deleteOne(id: string): Promise<Record<string, any> | null> {
    return await ClientModel.findByIdAndDelete(id).lean();
  }
}

const clientDao = new ClientDao();
export default clientDao;
