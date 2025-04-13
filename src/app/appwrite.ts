import { Client, Account, ID } from "node-appwrite";
import { serialize } from "cookie";
export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67f75ff80020d99d9d1f"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "node-appwrite";

export const login = async (email: string, password: string) => {
  const account = new Account(client);

  const session = await account.createEmailPasswordSession(email, password);
};

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  await account.create(ID.unique(), email, password, name);
  login(email, password);
};

export const logout = async (
  setLoggedInUser: React.Dispatch<React.SetStateAction<string | null>>
) => {
  await account.deleteSession("current");
  setLoggedInUser(null);
};
