import mongoose from "mongoose";

const shortSchma = new mongoose.Schema({
  shortCode: String,
  longUrl: String,
  
})
export const Url=mongoose.model("shortURL",shortSchma)