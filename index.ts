import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();

import FieldRoutes from "./src/modules/field/field.routes";
import { connectMongoDB } from "./src/loaders/mongodb.loader";
import TypeFieldRoutes from "./src/modules/typeField/typeField.routes";
import DescriptorRoutes from "./src/modules/descriptor/descriptor.routes";
import ItemRoutes from "./src/modules/item/item.routes";

const app = express();
connectMongoDB();

app.use(cors());
app.use(express.json());

app.use("/typeField", new TypeFieldRoutes().routes);
app.use("/field", new FieldRoutes().routes);
app.use("/descriptor", new DescriptorRoutes().routes);
app.use("/descriptor_items", new ItemRoutes().routes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use((err, req, res, next) => {
  res.json([]);
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});

