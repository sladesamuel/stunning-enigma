// https://medium.com/free-code-camp/build-an-apollo-graphql-server-with-typescript-and-webpack-hot-module-replacement-hmr-3c339d05184f

import { ApolloServer } from "apollo-server"

import { environment } from "./environment"
import resolvers from "./resolvers"
import schemas from "./schemas"

const server = new ApolloServer({
  resolvers,
  typeDefs: schemas,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground
})

server.listen(environment.port)
  .then(({ url }) => console.log(`Server is listening on ${url}`))

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => console.log("Module disposed"))
}