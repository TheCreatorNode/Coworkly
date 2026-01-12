require("dotenv").config();

const environment = process.env.NODE_ENV || "development";
const isDev = environment === "development";

// Mongo URI
const getMongoUri = () =>
  process.env[`${environment.toUpperCase().trim()}_MONGO_URI`] ||
  "mongodb://localhost:27017/tododb";

const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 2026,
  NODE_ENV: environment,
  JWT: {
    accessToken: {
      secret: process.env.ACCESS_TOKEN_SECRET || "",
      exp: process.env.ACCESS_TOKEN_EXP || "30m",
    },
    refreshToken: {
      secret: process.env.REFRESH_TOKEN_SECRET || "",
      exp: process.env.REFRESH_TOKEN_EXP || "1w",
    },
  },

  db: {
    mongo: {
      uri: getMongoUri(),
    },
    redis: {
      port: Number(process.env.REDIS_PORT) || 6379,
      host: process.env.REDIS_HOST || "localhost",
      password: process.env.REDIS_PASSWORD || undefined,
    },
  },
};

module.exports = { config, isDev };
