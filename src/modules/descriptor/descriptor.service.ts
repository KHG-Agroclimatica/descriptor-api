import DescriptorRepository from "./descriptor.repository";
import { DescriptorModel, IDescriptorModel } from "./models/descriptor.model";

class DescriptorService {
  private repository: DescriptorRepository;

  constructor() {
    this.repository = new DescriptorRepository(DescriptorModel);
  }

  async getAll() {
    return await this.repository.findAll();
  }

  async getById (id: string) {
    return await this.repository.findById(id);
  }

  async filterFields (id: string) {
    return await this.repository.filterFields(id);
  }

  async create(dto: any) {
    const field: IDescriptorModel = {
      name: dto.name,
      description: dto.description,
      fieldIds: dto.fieldIds,
      countryIds: dto.countryIds,
      classificationId: dto.classificationId
    };

    return await this.repository.create(field);
  }

  async delete(id: string) {
    return await this.repository.remove({ _id: id });
  }

  async update(id: string, data: any) {
    await this.repository.updateOne({ _id: id }, { $set: data });
    return await this.repository.findById(id);
  }
}

export default DescriptorService;
