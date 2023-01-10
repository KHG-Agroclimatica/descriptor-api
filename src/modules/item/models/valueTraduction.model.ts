import { Schema } from "mongoose";

interface IValueTraductionModel {
  _id?: string;
  languageId: Number;
  countryId: Array<Number>;
  value: string;
}

const ValueTraductionSchema = new Schema<IValueTraductionModel>({
  languageId: { type: Number, required: true },
  countryId: { type: [Number], required: true },
  value: { type: String, required: true },
});

export { IValueTraductionModel, ValueTraductionSchema };
