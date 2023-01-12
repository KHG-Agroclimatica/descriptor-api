import BaseRepository from "../../utils/baseRepository";
import { IFieldModel } from "../field/models/Field.model";
import { IDescriptorModel } from "./models/descriptor.model";

class DescriptorRepository extends BaseRepository<IDescriptorModel> {
  async filterFields(id: string) {

    try {
      const result = await this.model.findOne({ _id: id }).populate("fieldIds");

      const fields = result?.fieldIds.filter((item: IFieldModel) => item.isActive == true);
      return fields;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

export default DescriptorRepository;
