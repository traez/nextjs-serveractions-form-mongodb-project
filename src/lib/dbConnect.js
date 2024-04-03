import mongoose from 'mongoose'

export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw new Error('Connection failed!')
  }
}