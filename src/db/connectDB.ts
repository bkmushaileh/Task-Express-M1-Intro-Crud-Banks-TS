import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await connect(
      "mongodb+srv://balmushaileh:gVJ2uf3omttZ9VIt@cluster0.0pozpfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB connected: ${connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
