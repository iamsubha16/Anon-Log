import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@blog-app.kghbgzy.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database Connection Successful");
  } catch (error) {
    console.log("Database Connection is not Successful", error);
  }
};

export default Connection;
