import { Account, Client } from "node-appwrite";
import { useMemo } from "react";
const useAppwriteClient = () => {
  const client = useMemo(() => {
    return new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("67f75ff80020d99d9d1f")
      .setKey(
        "standard_43091682a782e5d0d52f5b0b3563151bd5b72a2c2c75545e9754896b52464fb6f7f243f45313907912d36450019abd73d24bbc4899ecc869cabfbcacbdb68cf57090720b33ff264bae1bfa55973431bab3a73721888b7af4f41362c8d380d9e36726539b93df7c4dbdceb7cde8d0e23553b871274b884ffc26a3184bfab1bbc7"
      );
  }, []);

  const account = useMemo(() => new Account(client), [client]);

  return { client, account };
};

export default useAppwriteClient;
