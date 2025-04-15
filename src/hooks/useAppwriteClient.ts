import { Account, Client } from "node-appwrite";
import { useMemo } from "react";
const useAppwriteClient = () => {
  const client = useMemo(() => {
    return new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "")
      .setKey(process.env.NEXT_PUBLIC_APPWRITE_KEY || "");
  }, []);

  const account = useMemo(() => new Account(client), [client]);

  return { client, account };
};

export default useAppwriteClient;
