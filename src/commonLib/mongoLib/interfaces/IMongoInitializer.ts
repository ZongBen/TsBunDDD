import type { Connection } from "mongoose";
import type { IMongoSchema } from "./IMongoSchema";

export interface IMongoInitializer {
    regisModel(schemas: IMongoSchema[]): void;
    getDb(): Connection
}
