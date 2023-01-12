import { model, Schema } from "mongoose";

interface IClassificationModel {
  _id: String;
  name: String;
  description: String;
  isActive: boolean;
}

const ClassificationSchema = new Schema<IClassificationModel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
});

const ClassificationModel = model<IClassificationModel>(
  "Classification",
  ClassificationSchema
);

export { ClassificationModel, IClassificationModel };
