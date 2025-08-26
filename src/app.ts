import express from "express";
import { accounts } from "./data/accounts";
import accountRouter from "./api/accounts/accounts.routes";
import connectDB from "./db/connectDB";
import { config } from "dotenv";
import { env } from "./config";

const app = express();
connectDB();

app.use(express.json());

app.use("/accounts", accountRouter);

app.listen(env.PORT, () => {
  console.log("My Server is Running");
});
