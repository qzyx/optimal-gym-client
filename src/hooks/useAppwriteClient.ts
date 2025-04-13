import { Account, Client } from "node-appwrite";
import { useMemo } from "react";
const useAppwriteClient = () => {
  const client = useMemo(() => {
    return new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("67f75ff80020d99d9d1f");
  }, []);

  const account = useMemo(() => new Account(client), [client]);

  return { client, account };
};

export default useAppwriteClient;
