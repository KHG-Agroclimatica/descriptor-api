import BaseRepository from "../../utils/baseRepository";
import { IDescriptorModel } from "./models/descriptor.model";

class DescriptorRepository extends BaseRepository<IDescriptorModel> {
  async filterFields(id: string) {

    try {
      const result = await this.model.findOne({ _id: id }).populate("fieldIds");

      return result?.fieldIds;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

export default DescriptorRepository;
