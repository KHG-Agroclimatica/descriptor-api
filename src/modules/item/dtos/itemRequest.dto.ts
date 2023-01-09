import { IImageModel } from "../models/itemImage.model";
import { IValueTraductionModel } from "../models/valueTraduction.model";

type ItemFieldValueDTO = 
| IValueTraductionModel
| IImageModel

export interface ItemFieldDTO {
    fieldId: string;
    value: Array<ItemFieldValueDTO>
}

export interface ItemRequestDTO {
    descriptorId: string;
    name: string;
    fields: Array<ItemFieldDTO>;
    countryIds: Array<String>;
}