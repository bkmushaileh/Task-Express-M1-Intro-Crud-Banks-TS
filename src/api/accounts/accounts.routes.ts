import { Router } from "express";
import {
  createNewAccount,
  deleteAccountByID,
  getAllAccounts,
  GetVIPAccounts,
  modifyCurrency,
  updateAccountByID,
} from "./accounts.controller";

const accountRouter = Router();

accountRouter.get("/", getAllAccounts);
accountRouter.post("/", createNewAccount);
accountRouter.get("/vip", GetVIPAccounts);
accountRouter.delete("/:accountID", deleteAccountByID);
accountRouter.put("/:accountID", updateAccountByID);
accountRouter.get("/:username", modifyCurrency);

export default accountRouter;
