import dotenv from "dotenv";
dotenv.config();

if (!process.env.MANGO_DB) {
  throw new Error("Missing DB_URL in environment");
}

export const env = {
  PORT: process.env.PORT || "8000",
  MANGO_DB: process.env.MANGO_DB,
};
