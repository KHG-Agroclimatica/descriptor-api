import express from "express";
import DescriptorController from "./descriptor.controller";

const router = express.Router();

class DescriptorRoutes {
  private _controller: DescriptorController;

  constructor() {
    this._controller = new DescriptorController();
  }

  get routes() {
    router.get("/:id/fields", this._controller.filterFields);
    router.get("/:id", this._controller.getById);
    router.get("/", this._controller.getAll);
    router.put("/:id", this._controller.update);
    router.delete("/:id", this._controller.delete);
    router.post("/create", this._controller.create);

    return router;
  }
}

export default DescriptorRoutes;