import { Models } from "node-appwrite";

export interface UserDataFromDatabase extends Models.Document {
  name: string;
  email: string;
  pfp: string | null;
  MembershipStartedDate: string;
  MembershipEndedDate: string;
  workouts: any;
  membershipType: string;
  lastPayment: string;
}
