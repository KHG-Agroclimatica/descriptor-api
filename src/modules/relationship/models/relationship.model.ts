import { model, Schema } from "mongoose";

interface Api {
  uri: String; // http:localhost://3000/crops
  parameterName: String; // cropname, cropid          -- cattleid, cattlename
  parameterId: String; // cropname, cropid          -- cattleid, cattlename
}

interface IRelationshipModel {
  _id?: String;
  name: String;
  api: Api;
  isActive: boolean;
}

const RelationshipSchema = new Schema<IRelationshipModel>(
  {
    name: { type: String, required: true },
    api: { type: Object, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const RelationshipModel = model<IRelationshipModel>(
  "Relationship",
  RelationshipSchema
);

export { RelationshipModel, IRelationshipModel };
