import { accounts } from "../../data/accounts";
import { Request, Response } from "express";

export const getAllAccounts = (req: Request, res: Response) => {
  res.status(200).json(accounts);
};

export const createNewAccount = (req: Request, res: Response) => {
  const generatedID = Date.now();
  const account = {
    id: generatedID,
    username: req.body.username,
    funds: 0,
  };
  accounts.push(account);
  return res.status(201).json(account);
};

export const updateAccountByID = (req: Request, res: Response) => {
  const { accountID } = req.params;
  const index = accounts.findIndex((account) => account.id === +accountID!);
  if (index === -1) {
    return res.status(404).json({ message: "Account not found!" });
  }
  const updatedAccount = { id: accountID, ...req.body };
  accounts[index] = updatedAccount;
  return res.status(200).json(updatedAccount);
};
export const deleteAccountByID = (req: Request, res: Response) => {
  const { accountID } = req.params;
  const index = accounts.findIndex((account) => account.id === +accountID!);
  if (index === -1) {
    return res.status(404).json({ message: "Account not found!" });
  }
  accounts.splice(index, 1);

  return res.status(204).send();
};

export const modifyCurrency = (req: Request, res: Response) => {
  const { username } = req.params;
  const { currency } = req.query;

  const accountFound = accounts.find(
    (account) =>
      account.username.toLocaleLowerCase() === username!.toLocaleLowerCase()
  );
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
};
