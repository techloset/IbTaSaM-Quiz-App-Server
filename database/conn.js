import mongoose from "mongoose";

const connection = {};
export default async function connect() {
  if (connection.isConnected) {
    console.log("no");
    return;
  }
  mongoose.connect(`${process.env.ATLAS_URL}`);
  console.log("Connection Done");
}
