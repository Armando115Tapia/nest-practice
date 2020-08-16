import { Document } from "mongoose";

export interface Record extends Document {
  weight: String;
  height: String;
  pathology: String;
  description: String;
}

/**
 * Swagger API
 */
export const recordApi = {
  type: "object",
  properties: {
    weight: { type: "string" },
    height: { type: "string" },
    pathology: { type: "string" },
    description: { type: "string" },
  },
};
