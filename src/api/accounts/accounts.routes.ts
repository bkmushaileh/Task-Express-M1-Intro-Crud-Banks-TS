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

accountRouter.delete("/:accountID", deleteAccountByID);

accountRouter.put("/:accountID", updateAccountByID);

accountRouter.get("/:username", modifyCurrency);

accountRouter.get("/vip", GetVIPAccounts);

export default accountRouter;
