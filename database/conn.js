import mongoose from "mongoose";

const connection = {};
export default async function connect() {
  if (connection.isConnected) {
    console.log("no");
    return;
  }
  mongoose.connect(
    "mongodb+srv://ibtasam116:ibtasam1234@cluster0.hc5uren.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Connection Done");
}
