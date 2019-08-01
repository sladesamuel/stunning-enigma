// This script is to be run by the start-database.sh shell script when the database
// has been started within a Docker container. This script is used to setup the
// database for the server as well as the default user for this service to connect as

if (!adminPassword) {
  throw new Error("No admin password has been specified!")
}

const adminDb = connect("admin", "admin", "admin")
const db = adminDb.getMongo().getDB("enigma")

db.createUser({
  user: "enigma-server",
  pwd: "Password1",
  roles: [{ role: "readWrite", "db": "enigma" }]
})

db.users.insertOne({
  username: "slade",
  password: adminPassword,
  name: "Samuel Slade",
  role: "admin"
})