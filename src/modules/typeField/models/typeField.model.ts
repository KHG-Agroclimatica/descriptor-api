import { model, Schema } from "mongoose";

interface ITypeFieldModel {
  id?: string;
  name: string;
}

const TypeFieldScheme = new Schema<ITypeFieldModel>({
  name: { type: String, required: true },
});

const TypeModel = model<ITypeFieldModel>("TypeField", TypeFieldScheme);

export { TypeModel, TypeFieldScheme, ITypeFieldModel };
