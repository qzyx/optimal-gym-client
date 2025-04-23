import { formatDate } from "@/helpers/time";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import {
  Account as clientAccount,
  Client as clientClient,
  Databases as clientDatabases,
} from "appwrite";
import { Account, Client, Databases, ID, OAuthProvider } from "node-appwrite";
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "")
  .setKey(process.env.NEXT_PUBLIC_APPWRITE_KEY || "");

const appwirteClientclient = new clientClient()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");
export const appwriteClientAccount = new clientAccount(appwirteClientclient);
export const appwriteClientDatabases = new clientDatabases(
  appwirteClientclient
);
export const account = new Account(client);
export const databases = new Databases(client);

export const handleSubmitLogin = async (
  event: React.FormEvent,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  email: string,
  password: string
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
      setError("Failed to store session into cookies");
    }
    console.log("Login successful");
    window.location.href = "/dashboard";
  } catch (err) {
    setError("Error during login check email and password");
    console.error("Error during login:", err);
  } finally {
    setLoading(false);
  }
};
export const handleSubmitWithGoogle = async (
  event: React.FormEvent,

  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  event.preventDefault();
  try {
    appwriteClientAccount.createOAuth2Session(
      "google" as OAuthProvider,
      "http://localhost:3000/dashboard",
      "http://localhost:3000/login"
    );
  } catch (err) {
    setError("Error during ");
    console.error("Error during login with google:", err);
  }
};

export const handleSubmitRegister = async (
  event: React.FormEvent,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | unknown | null>>,
  name: string,
  email: string,
  password: string
) => {
  event.preventDefault();
  const databases = new Databases(client);

  const DATABASE_ID = "67f950b50039e0b72f94";
  const COLLECTION_ID = "67fe5ef9003db7db33fb";

  try {
    setLoading(true);
    if (!email || !password || !name) {
      setError("Name. Email and password are required");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    const initialId = ID.unique();
    const initialUserData = {
      name,
      email,
      workouts: [],
      pfp: null,
      membershipType: null,
    };

    const user = await account.create(initialId, email, password, name);
    console.log("User created:", user);
    await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      initialId,
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

export const getUserInfoFromDatabase = async (id: string) => {
  const userInfoFromDatabase = await databases.getDocument(
    "67f950b50039e0b72f94",
    "67fe5ef9003db7db33fb",
    id
  );
  const user: UserDataFromDatabase = {
    $id: userInfoFromDatabase.$id,
    name: userInfoFromDatabase.name,
    email: userInfoFromDatabase.email,
    pfp: userInfoFromDatabase.pfp,
    membershipType: userInfoFromDatabase.membershipType,
    lastPayment: userInfoFromDatabase.lastPayment,
    MembershipStartedDate: userInfoFromDatabase.MembershipStartedDate,
    MembershipEndedDate: userInfoFromDatabase.MembershipEndedDate,
    workouts: userInfoFromDatabase.workouts || [],
  };
  return user;
};

export const handleAddStaticWorkout = async (
  duration: number,
  date: Date,
  id: string
) => {
  const workout = {
    date: formatDate(date),
    duration: duration,
  };
  const workoutString = JSON.stringify(workout);

  // Get the current user document to access existing workouts
  const currentUser = await databases.getDocument(
    "67f950b50039e0b72f94",
    "67fe5ef9003db7db33fb",
    id
  );

  const currentWorkouts = currentUser.workouts || [];

  const res = await databases.updateDocument(
    "67f950b50039e0b72f94",
    "67fe5ef9003db7db33fb",
    id,
    {
      workouts: [workoutString, ...currentWorkouts],
      lastPayment: date,
    }
  );
  console.log("added", res);
};
export const buyMembership = async (
  type: string,
  date: Date,
  userId: string
) => {
  const end = new Date(date);
  if (type === "month") {
    end.setMonth(end.getMonth() + 1);
  }
  if (type === "year") {
    end.setFullYear(end.getFullYear() + 1);
  }
  if (type === "single") {
    end.setDate(end.getDate() + 7);
  }
  console.log("setting end date:", end);

  await databases.updateDocument(
    "67f950b50039e0b72f94",
    "67fe5ef9003db7db33fb",
    userId,
    {
      lastPayment: date,
      membershipType: type,
      MembershipStartedDate: date,
      MembershipEndedDate: end,
    }
  );
};
