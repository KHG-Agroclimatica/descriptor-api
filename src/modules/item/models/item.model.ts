import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";
import { FieldValueSchema, IFieldValueModel } from "./fieldValue.model";

interface IItemModel {
  id?: string;
  descriptorId: String;
  name: string;
  fields?: Array<IFieldValueModel>;
  countryIds?: Array<String>;
  isActive: boolean;
  referencesIds: Array<Number>;
}

const ItemSchema = new Schema<IItemModel>(
  {
    name: { type: String, required: true },
    descriptorId: { type: ObjectId, required: true },
    fields: [{ type: FieldValueSchema }],
    countryIds: [{ type: String }],
    isActive: { type: Boolean, required: true, default: true },
    referencesIds: [{ type: Number }], 
  },
  { timestamps: true }
);

const ItemModel = model<IItemModel>("Item", ItemSchema);
export { ItemModel, ItemSchema, IItemModel };
