import BaseRepository from "../../utils/interfaces/baseRepository";
import { ITypeFieldModel } from "./models/typeField.model";

export default class TypeFieldRepository extends BaseRepository<
  ITypeFieldModel
> {

  async seed() {
    const x = await this.findAll();
    if (x.length != 0) return;

    this.model.insertMany([
      { name: "Rich text" },
      { name: "Image" },
    ])
      .then((resp) => console.log("type Field sown"))
      .catch((err) => console.error(err));
  }

}
