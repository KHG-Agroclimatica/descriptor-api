import { NextFunction, Request, Response } from "express";
import ItemService from "./item.service";

class ItemController {
  private _service: ItemService;

  constructor() {
    this._service = new ItemService();
  }

  getByDescriptorId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const response = await this._service.getByDescriptorId(req.params?.id);
      res.json(response);
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this._service.getById(req.params?.id);
      res.json(response);
    } catch (err) {
      next(err);
    }
  };

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
      await this._service.create(req.body);

      res.json({ success: true });
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
      await this._service.update(req.params.id, req.body);

      res.json({ name: "name" });
    } catch (err) {
      next(err);
    }
  };

  uploadImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this._service.uploadImage(req.params.id, req.body);
      res.json(response);
    } catch (err) {
      next(err);
    }
  };

  deleteImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this._service.deleteImage(req.params.id, req.body);
      res.json(response);
    } catch (err) {
      next(err);
    }
  };

}

export default ItemController;
