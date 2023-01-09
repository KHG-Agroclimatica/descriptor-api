export interface IImageTraductionModel {
  _id?: string;
  name: string;
  language: number;
}

export interface IImageModel {
  _id?: string;
  name: string;
  uri: string;
  traduction: Array<IImageTraductionModel>;
}
