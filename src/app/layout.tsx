import { SessionProvider } from "@/lib/sessionContext";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default RootLayout;
