import { TypeModel } from "./models/typeField.model";
import TypeFieldRepository from "./typeField.repository";

export default class TypeFieldService {
  private readonly _repository: TypeFieldRepository;

  constructor() {
    this._repository = new TypeFieldRepository(TypeModel);
    this._repository.seed();
  }

  async getAll() {
    const response = await this._repository.findAll();
    return response.map((item) => ({
      id: item._id,
      name: item.name,
      reference: item.reference,
    }));
  }
}
