import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";

interface IDescriptorModel {
  _id?: string;
  name: string;
  description: string;
  fieldIds: Array<string>;
  countryIds: Array<string>;
  classificationId: String;
}

const DescriptorScheme = new Schema<IDescriptorModel>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    fieldIds: [{ type: ObjectId, required: true, ref: "Field" }],
    countryIds: [{ type: String, required: true }],
    classificationId: { type: ObjectId, required: true, ref: "Classification" },
  },
  { timestamps: true }
);

const DescriptorModel = model<IDescriptorModel>("Descriptor", DescriptorScheme);

export { DescriptorModel, DescriptorScheme, IDescriptorModel };
