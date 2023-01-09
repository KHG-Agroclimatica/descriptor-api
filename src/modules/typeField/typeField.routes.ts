import express from "express";
import TypeFieldController from "./typeField.controller";

const router = express.Router();
export default class TypeFieldRoutes {
    private readonly _controller: TypeFieldController;
    constructor(){
        this._controller = new TypeFieldController();
    }

    get routes() {
        router.get('/', this._controller.getAll);

        return router;
    }
}