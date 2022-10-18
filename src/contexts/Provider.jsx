import {CadastrandoProvider} from "./CadastrandoContext";
import {AuthProvider} from "./AuthContext";
import {TecProvider} from "./TecContext";

export function Provider({ children }) {
  return (
    
      <TecProvider>
        <CadastrandoProvider>
          <AuthProvider>{children}</AuthProvider>
        </CadastrandoProvider>
      </TecProvider>
    
  );
}

