import { Account, Client, Databases } from "node-appwrite";
import { useMemo } from "react";
const useAppwriteClient = () => {
  const client = useMemo(() => {
    return new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "")
      .setKey(process.env.NEXT_PUBLIC_APPWRITE_KEY || "");
  }, []);

  const account = useMemo(() => new Account(client), [client]);
  const databases = new Databases(client);
  return { client, account, databases };
};

export default useAppwriteClient;
