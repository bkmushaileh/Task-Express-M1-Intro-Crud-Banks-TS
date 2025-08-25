import express from "express";
import { accounts } from "./data/accounts";
import accountRouter from "./api/accounts/accounts.routes";

const app = express();
app.use(express.json());

const PORT = 8000;

app.use("/accounts", accountRouter);

app.listen(PORT, () => {
  console.log("Listener");
});
