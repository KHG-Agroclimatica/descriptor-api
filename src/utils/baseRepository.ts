import {
  Document,
  FilterQuery,
  Model,
  QueryOptions,
  SaveOptions,
  UpdateQuery,
  UpdateWithAggregationPipeline,
} from "mongoose";

class BaseRepository<T> {
  model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async find(filter: FilterQuery<T>, options?: QueryOptions): Promise<T[]> {
    return await this.model.find({...filter}, null, options);
  }

  async findById(id: string) {
    return await this.model.findById(id);
  }

  async findAll(): Promise<T[]> {
    return await this.model.find({
      isActive: true
    });
  }

  async create(doc: object, saveOptions?: SaveOptions): Promise<any> {
    const newEntity = new this.model(doc);
    const saved = await newEntity.save(saveOptions);
    return saved;
  }

  async remove(filter: FilterQuery<T>): Promise<any> {
    // const result = await this.model.deleteOne(filter);
    const result = await this.model.updateOne(filter, {
      $set: { isActive: false },
    });
    return result;
  }

  async updateOne(
    filter: FilterQuery<T>,
    updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: QueryOptions<T>
  ): Promise<any> {
    return await this.model.updateOne(filter, updated, options);
  }

  async updateMany(
    filter: FilterQuery<T>,
    updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: QueryOptions<T>
  ): Promise<any> {
    return await this.model.updateMany(filter, updated, options);
  }
}

export default BaseRepository;
