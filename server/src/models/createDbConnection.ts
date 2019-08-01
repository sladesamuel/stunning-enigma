import mongoose, { Connection } from "mongoose"
import { environment } from "../environment"

const createDbConnection = (): Connection => {

  mongoose.connect(
    environment.db.url,
    {
      useNewUrlParser: true,
      auth: {
        user: environment.db.username,
        password: environment.db.password
      }
    }
  )

  mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"))

  return mongoose.connection
}

export default createDbConnection