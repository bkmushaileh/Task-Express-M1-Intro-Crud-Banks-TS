import { Request, Response } from "express";
import Account from "../../db/models/Account";

export const getAllAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find().select("-createdAt -updatedAt");
    console.log(accounts);
    return res.status(200).json(accounts);
  } catch (error) {
    console.log("Error Here", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const createNewAccount = async (req: Request, res: Response) => {
  const newAccount = await Account.create(req.body);
  console.log(newAccount);
  try {
    return res.status(201).json(newAccount);
  } catch (error) {
    return res.status(500).json({
      error: `This is my error ${error}`,
    });
  }
};

export const updateAccountByID = async (req: Request, res: Response) => {
  const { accountID } = req.params;
  const account = await Account.findById(accountID);
  try {
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    console.log(account);
    await account.updateOne(req.body);
    return res.sendStatus(204);
  } catch (error) {
    console.log("This is my error", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteAccountByID = async (req: Request, res: Response) => {
  const { accountID } = req.params;
  try {
    const account = await Account.findById(accountID);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    console.log(account);
    await account.deleteOne();
    return res.sendStatus(204);
  } catch (error) {
    console.log("This is my error", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const GetVIPAccounts = async (req: Request, res: Response) => {
  const { amount } = req.query;
  try {
    if (!amount) {
      return res.status(400).json({ message: "Invalid amount value" });
    }
    const vipAccounts = await Account.find({ funds: { $gt: amount } });
    return res.status(200).json(vipAccounts);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const modifyCurrency = async (req: Request, res: Response) => {
  const { username } = req.params;
  const { currency } = req.query;

  const accountFound = await Account.findOne({
    username: { $regex: new RegExp(`^${username}$`, "i") },
  });

  try {
    if (!accountFound) {
      return res.status(404).json({ message: "Account not found!" });
    }
    if (currency === "usd") {
      return res.status(200).json({
        ...accountFound,
        funds: accountFound.funds * 3.25,
        currency: "USD",
      });
    }
    return res.status(200).json({
      ...accountFound,
      currency: "KWD",
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
