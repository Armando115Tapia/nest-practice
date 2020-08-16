import * as mongoose from "mongoose";

export const recordSchema = new mongoose.Schema({
  patient: {
    ref: 'Patients',
    type: mongoose.Schema.Types.ObjectId
  },
  weight: {type: String, required: true},
  height: {type: String, required: true},
  pathology: {type: String, required: true},
  description: {type: String, required: true}
});
