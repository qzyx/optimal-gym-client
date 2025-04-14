export type UserSession = {
  userId: string;
  providerUid: string;
  provider: string;
  expire: string;
  $createdAt: string;
} | null;
