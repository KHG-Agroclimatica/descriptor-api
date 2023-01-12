import { RelationshipService } from "./relationship.service";
import { Request, Response } from "express";

export class RelationshipController {
  private readonly _service: RelationshipService;

  constructor() {
    this._service = new RelationshipService();
  }

  getAll = async (req: Request, res: Response) => {
    const response = await this._service.getAll();
    res.json(response);
  };
}
