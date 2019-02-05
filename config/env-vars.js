const {
  HOSTNAME: hostname = "localhost",
  MONGODB_DB,
  MONGODB_PASS,
  MONGODB_URI,
  MONGODB_USER,
  NODE_ENV: nodeEnv = "development",
  PORT: port = 3001,
  SESSION_SECRET: sessionSecret
} = process.env;

const mongoConnectionString =
  nodeEnv === "production"
    ? `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_URI}/${MONGODB_DB}`
    : `mongodb://localhost:27017/${MONGODB_DB}`;

module.exports = {
  hostname,
  mongoConnectionString,
  nodeEnv,
  port,
  sessionSecret
};
