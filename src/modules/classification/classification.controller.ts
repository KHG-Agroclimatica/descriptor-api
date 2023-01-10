import { NextFunction, Response, Request } from "express";
import ClassificationService from "./classification.service";

export default class ClassificationController {
  private _service: ClassificationService;

  constructor() {
    this._service = new ClassificationService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this._service.getAll();
      res.json(response);
    } catch (err) {
      next(err);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = JSON.parse(req.body.values);

      const response = await this._service.create(body);
      res.json(response);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this._service.delete(req.params?.id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { key, values } = req.body;

      const response = await this._service.update(key, JSON.parse(values));
      res.json(response);
    } catch (err) {
      next(err);
    }
  };
}
