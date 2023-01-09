import { Request, Response } from "express";
import TypeFieldService from "./typeField.service";

export default class TypeFieldController {
  private readonly _service: TypeFieldService;

  constructor() {
    this._service = new TypeFieldService();
  }

  getAll = async (req: Request, res: Response) => {
    const response = await this._service.getAll();
    res.json(response);
  };
}
