import express from "express";
import { accounts } from "./data/accounts";
import blogRouter from "./api/accounts/accounts.routes";

const app = express();
app.use(express.json());

const PORT = 8000;

app.use("/accounts", blogRouter)

app.listen(PORT, () => {
  console.log("Listener");
});
