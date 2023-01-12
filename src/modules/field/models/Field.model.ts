import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";

interface IFieldModel {
  id?: string;
  name: string;
  description?: string;
  typeField: String;
  classificationId: Array<String>;
  isActive: boolean;
}

const FieldScheme = new Schema<IFieldModel>(
  {
    name: { type: String, required: true },
    description: { type: String },
    typeField: { type: String, required: true },
    classificationId: [
      { type: ObjectId, required: true, ref: "Classification" },
    ],
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const FieldModel = model<IFieldModel>("Field", FieldScheme);

export { FieldModel, FieldScheme, IFieldModel };
