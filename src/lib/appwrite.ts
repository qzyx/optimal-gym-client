import { Account, Client } from "node-appwrite";

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
  client: Client
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
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password, client }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setError("Failed to register");
      return;
    }
    console.log("Register successful");
    window.location.href = "/dashboard";
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
