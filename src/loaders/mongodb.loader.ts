import mongoose from "mongoose"
import { EnvConfig } from "../config/envConfig"

const connectMongoDB = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(EnvConfig.mongodb.URI!);
    console.log('mongodb connected');
}

export {
    connectMongoDB
};
