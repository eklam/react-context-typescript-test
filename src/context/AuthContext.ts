import React, { useState } from "react";
import { AuthState } from "./types";

export function useAuth() {
    const [auth, setAuth] = useState<AuthState | undefined>(undefined)
    
    return { auth, login: setAuth, logout: () => setAuth(undefined) }
}

export default React.createContext<AuthState | undefined>(undefined);
