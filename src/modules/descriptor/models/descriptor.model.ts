import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";
import { IFieldModel } from "../../field/models/Field.model";

interface IDescriptorModel {
  _id?: string;
  name: string;
  description: string;
  fieldIds: Array<string> & Array<IFieldModel>;
  countryIds: Array<string>;
  classificationId: String;
  isActive: boolean;
}

const DescriptorScheme = new Schema<IDescriptorModel>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    fieldIds: [{ type: ObjectId, required: true, ref: "Field" }],
    countryIds: [{ type: String, required: true }],
    classificationId: { type: ObjectId, required: true, ref: "Classification" },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const DescriptorModel = model<IDescriptorModel>("Descriptor", DescriptorScheme);

export { DescriptorModel, DescriptorScheme, IDescriptorModel };
