import { model, Schema } from "mongoose";

interface IFieldModel {
  id?: string;
  name: string;
  description?: string;
  typeField: String;
}

const FieldScheme = new Schema<IFieldModel>(
  {
    name: { type: String, required: true },
    description: { type: String },
    typeField: { type: String, required: true },
  },
  { timestamps: true }
);

const FieldModel = model<IFieldModel>("Field", FieldScheme);

export { FieldModel, FieldScheme, IFieldModel };
