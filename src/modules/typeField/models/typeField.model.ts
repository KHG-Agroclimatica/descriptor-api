import { model, Schema } from "mongoose";

interface ITypeFieldModel {
  _id: String;
  reference: String;
  name: string;
}

const TypeFieldScheme = new Schema<ITypeFieldModel>({
  name: { type: String, required: true },
  reference: { type: String, required: true },
});

const TypeModel = model<ITypeFieldModel>("TypeField", TypeFieldScheme);

export { TypeModel, TypeFieldScheme, ITypeFieldModel };
