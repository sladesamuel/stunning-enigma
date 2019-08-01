interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  port: number | string,
  db: {
    url: string,
    username: string,
    password: string
  }
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === "true",
    playground: process.env.APOLLO_PLAYGROUND === "true"
  },
  port: process.env.PORT || 4000,
  db: {
    url: process.env.DB_URL || "",
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || ""
  }
}