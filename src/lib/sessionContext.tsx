"use client";

import { useContext, useState, createContext } from "react";

type SessionContextType = {
  user: object | null;
  setUser: React.Dispatch<React.SetStateAction<object | null>>;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any | null>(null);
  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};
export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a sessionProvider");
  }
  return context;
};
