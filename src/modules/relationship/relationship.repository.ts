import BaseRepository from "../../utils/baseRepository";
import { IRelationshipModel } from "./models/relationship.model";

export class RelationshipRepository extends BaseRepository<IRelationshipModel> {
  async seed() {
    const x = await this.findAll();
    if (x.length != 0) return;

    const relationshipList: Array<IRelationshipModel> = [
      {
        isActive: true,
        api: {
          parameterName: "cropName",
          parameterId: "cropId",
          uri: "http://localhost:3001/Crop",
        },
        name: "CROP",
      },
    ];

    this.model
      .insertMany(relationshipList)
      .then((resp) => console.log("Relationship list created"))
      .catch((err) => console.error(err));
  }
}
