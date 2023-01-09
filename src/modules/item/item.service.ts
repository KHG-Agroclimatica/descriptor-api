import { ImageInsertDTO } from "./dtos/imageInsert.dto";
import { ItemRequestDTO } from "./dtos/itemRequest.dto";
import ItemRepository from "./item.repository";
import { ItemModel } from "./models/item.model";
import { v4 } from 'uuid';
import { IImageModel } from "./models/itemImage.model";
import axios from "axios";
import { EnvConfig } from "../../config/envConfig";

class ItemService {
  private repository: ItemRepository;

  constructor() {
    this.repository = new ItemRepository(ItemModel);
  }

  async getByDescriptorId(descriptorId: string) {
    const response = await this.repository.filterByDescriptorId(descriptorId);
    return response;
  }

  async getById(itemId: string) {
    const response = await this.repository.findById(itemId);
    return response;
  }

  async getAll() {
    return await this.repository.findAll();
  }

  async create(dto: ItemRequestDTO) {
    return await this.repository.create(dto);
  }

  async delete(id: string) {
    this.repository.remove({ _id: id });
  }

  async update(id: string, data: any) {
    return await this.repository.updateCompleteField(id, data);
  }

  async uploadImage(id: string, dto: ImageInsertDTO) {
    const item = await this.repository.findById(id);
    if (item == null)
      return false;

    const fieldImages = item.fields?.find(field => field.fieldId == dto.fieldId);

    const newImage: IImageModel = {
      _id: dto.imageId ?? v4(),
      name: dto.name,
      traduction: dto.traductionName,
      uri: dto.uri
    } 

    if (!fieldImages)
      item.fields?.push({ fieldId: dto.fieldId, value: [newImage] });

    else {
      if (!dto.imageId)
        fieldImages?.value.push(newImage);
      else {
        const imageIndex = fieldImages.value.findIndex((item: any) => item?._id == dto.imageId);
        fieldImages.value[imageIndex] = newImage;
      }
    }

    item.save();

    return newImage;
  }

  async deleteImage(itemId: string, dto: any) {

    axios.post(EnvConfig.cdn_images.URL + '/delete', { url: `http://localhost:3007/${dto.imageURI}` });
    return this.repository.deleteImage(itemId, dto);
  }
}

export default ItemService;
