import { Account, Client, Databases, ID } from "node-appwrite";

export const handleSubmitLogin = async (
  event: React.FormEvent,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  email: string,
  password: string,
  account: Account
) => {
  event.preventDefault();
  try {
    setLoading(true);
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    const session = await account.createEmailPasswordSession(email, password);
    console.log("Session created:", session);
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ session: session }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setError("Failed to log in");
      return;
    }
    console.log("Login successful");
    window.location.href = "/dashboard";
  } catch (err) {
    setError("Error during login");
    console.error("Error during login:", err);
  } finally {
    setLoading(false);
  }
};

export const handleSubmitRegister = async (
  event: React.FormEvent,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | unknown | null>>,
  name: string,
  email: string,
  password: string,
  appwrite: {
    account: Account;
    client: Client;
  }
) => {
  event.preventDefault();
  const databases = new Databases(appwrite.client);

  const DATABASE_ID = "67f950b50039e0b72f94";
  const COLLECTION_ID = "67f950c400265a40669d";

  const initialUserData = {
    name,
    sessionCount: 0,
    timeElapsed: 0,
    workouts: [],
    pfp: null,
    membership: null,
  };

  try {
    setLoading(true);
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    console.log("Register function called");
    const user = await appwrite.account.create(
      "unique()",
      email,
      password,
      name
    );
    console.log("User created:", user);
    const userData = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      initialUserData
    );
    console.log("User data created:");
    console.log("Register successful");

    window.location.href = "/login";
  } catch (err) {
    setError(err);
    console.error("Error during register:", err);
  } finally {
    setLoading(false);
  }
};

export const handleSubmitLogout = async () => {
  console.log("Logout function called");
  try {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}), // Send an empty JSON object if required
    });
    console.log("Logout response:", res);
  } catch (err) {
    console.error("Error during logout:", err);
  }
};
