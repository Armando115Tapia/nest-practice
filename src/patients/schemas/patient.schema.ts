import * as mongoose from "mongoose";

export const patientSchema = new mongoose.Schema({
  personalData: {
    NHC: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    secondLastName: String,
    gender: String,
    birthdate: String,
    NIF: String,
  },
  address: {
    street: String,
    number: String,
    door: String,
    postalCode: String,
    city: String,
  },
  issurances: [],
  records: [
    {
      ref: "Record",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
