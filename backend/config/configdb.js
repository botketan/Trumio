import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

export const connectDB = async () => {
  let connection;
  try {
     connection = await mongoose.connect(
      MONGODB_URI,
      {
        dbName: DB_NAME,
      },
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit();
  }
};
