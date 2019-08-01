import mongoose, { Schema, Document } from "mongoose"
import createDbConnection from "./createDbConnection"

createDbConnection()

interface User extends Document {
  username: string
  password: string
}

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

export default mongoose.model<User>("User", schema, "users")