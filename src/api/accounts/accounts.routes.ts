import { Router } from "express";
import {
  createNewAccount,
  deleteAccountByID,
  getAllAccounts,
  modifyCurrency,
} from "./accounts.controller";

const blogRouter = Router();

blogRouter.get("/", getAllAccounts);

blogRouter.post("/", createNewAccount);

blogRouter.delete("/:accountID");

blogRouter.put("/:accountID", deleteAccountByID);

blogRouter.get("/:username", modifyCurrency);
export default blogRouter;
