import { Schema } from "mongoose";
import { IImageModel } from "./itemImage.model";
import { IValueTraductionModel } from "./valueTraduction.model";

type TFieldValue = | IValueTraductionModel | IImageModel;

interface IFieldValueModel {
  id?: string;
  fieldId: string;
  value: Array<TFieldValue>;
}

const FieldValueSchema = new Schema<IFieldValueModel>({
  fieldId: { type: String, required: true },
  value: [{ type: Schema.Types.Mixed }],
});

export { IFieldValueModel, FieldValueSchema, TFieldValue };
