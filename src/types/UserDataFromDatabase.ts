export interface UserDataFromDatabase {
  $id: string;
  $createdAt?: string;
  $updatedAt?: string;
  name: string;
  email: string;
  pfp: string | null;
  MembershipStartedDate: Date;
  MembershipEndedDate: Date;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workouts: any;
  membershipType: string;
  lastPayment: Date;
}
