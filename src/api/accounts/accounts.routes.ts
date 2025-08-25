import { Router } from "express";
import {
  createNewAccount,
  deleteAccountByID,
  getAllAccounts,
  modifyCurrency,
  updateAccountByID,
} from "./accounts.controller";

const blogRouter = Router();

blogRouter.get("/", getAllAccounts);

blogRouter.post("/", createNewAccount);

blogRouter.delete("/:accountID", deleteAccountByID);

blogRouter.put("/:accountID", updateAccountByID);

blogRouter.get("/:username", modifyCurrency);
export default blogRouter;
