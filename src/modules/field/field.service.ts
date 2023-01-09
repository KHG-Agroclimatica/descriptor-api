import FieldRepository from "./field.repository";
import { FieldModel, IFieldModel } from "./models/Field.model";

class FieldService {
    private repository: FieldRepository;

    constructor() {
        this.repository = new FieldRepository(FieldModel);
    }

    async getAll() {
        return await this.repository.findAll();
    }

    async create(dto: any) {
        const field : IFieldModel = {
            name: dto.name,
            description: dto.description,
            typeField: dto.typeField
        }

        const x =  await this.repository.create(field);
        return x;
    }

    async delete(id: string){
        return await this.repository.remove({_id: id});
    }

    async update(id: string, data: any){
        await this.repository.updateOne({_id: id}, {$set: data});
        return await this.repository.findById(id);
    }

}

export default FieldService;