import BaseRepository from "../../utils/interfaces/baseRepository";
import { ItemRequestDTO } from "./dtos/itemRequest.dto";
import { IItemModel } from "./models/item.model";
import { IImageModel } from "./models/itemImage.model";

class ItemRepository extends BaseRepository<IItemModel> {
  async filterByItemIdAndFieldId(itemId: string, fieldId: string) {
    return await this.model.findOne({
      $and: [{ _id: itemId }, { fields: { $elemMatch: { fieldId: fieldId } } }],
    });
  }

  async filterByDescriptorId(descriptorId: string) {
    return await this.find({
      descriptorId: descriptorId,
    });
  }

  async updateCompleteField(id: string, data: ItemRequestDTO) {
    const item = await this.findById(id);

    if (!item)
      return null;

    item.name = data.name
    item.countryIds = data.countryIds;

    for (const fieldUpdate of data.fields) {
      const fieldObject = item.fields?.find(field => field.fieldId == fieldUpdate.fieldId);

      if (fieldObject == null) {
        item.fields?.push({ fieldId: fieldUpdate.fieldId, value: fieldUpdate.value });
      } else {
        fieldObject.value = fieldUpdate.value;
      }
    }
    item.save();
  }

  async deleteImage(id: string, dto: any) {
    const { imageId, fieldId } = dto;

    await this.model.findOneAndUpdate(
      { _id: id },
      { $pull: { 'fields.$[field].value': { '_id': imageId } } }, {
      arrayFilters: [
        { 'field.fieldId': fieldId }
      ]
    })

    return true;
  }
}

export default ItemRepository;
