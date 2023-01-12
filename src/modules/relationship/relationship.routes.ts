import express from "express";
import { RelationshipController } from "./relationship.controller";

const router = express.Router();
export class RelationshipRoutes {
    private readonly _controller: RelationshipController;
    constructor(){
        this._controller = new RelationshipController();
    }

    get routes() {
        router.get('/', this._controller.getAll);

        return router;
    }

}