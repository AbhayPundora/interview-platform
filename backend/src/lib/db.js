import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("✅ Connected to MongoDB:", conn.connection.host);
  } catch (error) {
    console.error("❌Error connecting to MongoDB:", error);
    process.exit(1); //0 means success, 1 means failure. We exit the process with a failure code if we can't connect to the database
  }
};
