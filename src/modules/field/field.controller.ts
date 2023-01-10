import { NextFunction, Request, Response } from "express";
import FieldService from "./field.service";

class FieldController {
  private _service: FieldService;

  constructor() {
    this._service = new FieldService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    const response = await this._service.getAll();
    res.json(response);
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, typeField, classificationId } = JSON.parse(req.body.values);

    const response = await this._service.create({
      name,
      description,
      typeField,
      classificationId
    });
    res.json(response);
  };

  delete = async (req: Request, res: Response) => {
    await this._service.delete(req.params?.id);
    res.json({ success: true });
  };

  update = async (req: Request, res: Response) => {
    const {key, values} = req.body;

    const response = await this._service.update(key, JSON.parse(values));
    res.json(response);
  };
}

export default FieldController;
