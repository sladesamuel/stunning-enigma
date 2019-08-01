import mongoose, { Schema, Document } from "mongoose"
import createDbConnection from "./createDbConnection"

createDbConnection()

interface User extends Document {
  username: string
  password: string
  name: string
  role: string
}

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
})

const model = mongoose.model<User>("User", schema, "users")

const getUsers = async (): Promise<User[]> => <User[]> await model.find()
const getUserByUsername = async (username: string): Promise<User> => <User> await model.findOne({ username })

export {
  getUsers,
  getUserByUsername
}