import { Schema } from "mongoose";
import { IImageModel } from "./itemImage.model";
import { IValueTraductionModel } from "./valueTraduction.model";

type TFieldValue = | IValueTraductionModel | IImageModel;

interface IFieldValueModel {
  _id?: string;
  fieldId: string;
  isActive: boolean;
  value: Array<TFieldValue>;
}

const FieldValueSchema = new Schema<IFieldValueModel>({
  isActive: {type: Boolean, required: true, default: true},
  fieldId: { type: String, required: true },
  value: [{ type: Schema.Types.Mixed }],
});

export { IFieldValueModel, FieldValueSchema, TFieldValue };
