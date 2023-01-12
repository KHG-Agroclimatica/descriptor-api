import { RelationshipModel } from "./models/relationship.model";
import { RelationshipRepository } from "./relationship.repository";

export class RelationshipService {
    private readonly _repository: RelationshipRepository;

    constructor() {
      this._repository = new RelationshipRepository(RelationshipModel);
      this._repository.seed();
    }
  
    async getAll() {
      return await this._repository.findAll();
    }
}