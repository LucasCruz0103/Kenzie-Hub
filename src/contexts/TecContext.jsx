import { createContext, useState } from "react";

export const TecContext = createContext({});

export function TecProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <TecContext.Provider value={{ user, setUser }}>
      {children}
    </TecContext.Provider>
  );
}