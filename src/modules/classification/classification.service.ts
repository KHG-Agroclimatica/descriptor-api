import ClassificationRepository from "./classification.repository";
import { ClassificationModel } from "./models/classification.model";

export default class ClassificationService {
    private _repository: ClassificationRepository;

    constructor(){
        this._repository = new ClassificationRepository(ClassificationModel);
    }

    async getAll() {
        return await this._repository.findAll();
      }
    
      async getById (id: string) {
        return await this._repository.findById(id);
      }
    
      async create(dto: any) {
        return await this._repository.create(dto);
      }
    
      async delete(id: string) {
        return await this._repository.remove({ _id: id });
      }
    
      async update(id: string, data: any) {
        await this._repository.updateOne({ _id: id }, { $set: data });
        return await this._repository.findById(id);
      }
}
