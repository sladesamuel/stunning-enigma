// This script is to be run by the start-database.sh shell script when the database
// has been started within a Docker container. This script is used to setup the
// database for the server as well as the default user for this service to connect as

const adminDb = connect("admin", "admin", "admin")
const db = adminDb.getMongo().getDB("enigma")

db.createUser({
  user: "enigma-server",
  pwd: "Password1",
  roles: [{ role: "readWrite", "db": "enigma" }]
})

db.users.insertOne({
  username: "slade",
  password: "password",
  name: "Samuel Slade",
  role: "admin"
})