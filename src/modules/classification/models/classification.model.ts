import { model, Schema } from "mongoose";

interface IClassificationModel {
  _id: String;
  name: String;
  description: String;
}

const ClassificationSchema = new Schema<IClassificationModel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const ClassificationModel = model<IClassificationModel>(
  "Classification",
  ClassificationSchema
);

export { ClassificationModel, IClassificationModel };
