import express from "express";
import FieldController from "./field.controller";

const router = express.Router();

class FieldRoutes {
  private _controller: FieldController;

  constructor() {
    this._controller = new FieldController();
  }

  get routes() {
    router.get("/", this._controller.getAll);
    router.put("/:id", this._controller.update);
    router.delete("/:id", this._controller.delete);
    router.post("/create", this._controller.create);

    return router;
  }
}

export default FieldRoutes;