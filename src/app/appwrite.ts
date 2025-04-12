import { Client, Account, ID } from "node-appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67f75ff80020d99d9d1f"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "node-appwrite";

export const login = async (
  email: string,
  password: string,
  setLoggedInUser: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const session = await account.createEmailPasswordSession(email, password);
  const userSession = await account.getSession(session.$id);
  setLoggedInUser(userSession.userId);
  console.log("User logged in:", userSession.userId);
};

export const register = async (
  email: string,
  password: string,
  name: string,
  setLoggedInUser: React.Dispatch<React.SetStateAction<string | null>>
) => {
  await account.create(ID.unique(), email, password, name);
  login(email, password, setLoggedInUser);
};

export const logout = async (
  setLoggedInUser: React.Dispatch<React.SetStateAction<string | null>>
) => {
  await account.deleteSession("current");
  setLoggedInUser(null);
};
