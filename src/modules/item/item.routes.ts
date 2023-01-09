import express from "express";
import ItemController from "./item.controller";

const router = express.Router();

class ItemRoutes {
  private _controller: ItemController;

  constructor() {
    this._controller = new ItemController();
  }

  get routes() {
    router.get('/descriptor/:id', this._controller.getByDescriptorId)
    router.get("/:id", this._controller.getById);
    router.get("/", this._controller.getAll);
    router.put("/:id", this._controller.update);
    router.delete("/:id", this._controller.delete);
    router.post("/create", this._controller.create);
    router.post("/:id/uploadImage", this._controller.uploadImage);
    router.post("/:id/deleteImage", this._controller.deleteImage);

    return router;
  }
}

export default ItemRoutes;