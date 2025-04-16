import { Models } from "node-appwrite";

export interface UserDataFromDatabase extends Models.Document {
  name: string;
  email: string;
  pfp: string | null;
  MembershipStartedDate: Date;
  MembershipEndedDate: Date;
  workouts: any;
  membershipType: string;
  lastPayment: Date;
}
