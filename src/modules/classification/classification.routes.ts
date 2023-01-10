import express from "express";
import ClassificationController from "./classification.controller";

const router = express.Router();

export default class ClassificationRoutes {
  private _controller: ClassificationController;

  constructor() {
    this._controller = new ClassificationController();
  }
  
  public get routes(){
    router.get("/", this._controller.getAll);
    router.put("/:id", this._controller.update);
    router.delete("/:id", this._controller.delete);
    router.post("/create", this._controller.create);

    return router;
  }
  
}
