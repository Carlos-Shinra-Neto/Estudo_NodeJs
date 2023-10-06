import mongoose from "mongoose";

mongoose.connect("mongodb+srv://BFLInvestimentos:bflInvestimentos2023@cluster0.figmter.mongodb.net/BFL-Investimentos");

let db = mongoose.connection;

export default db;
