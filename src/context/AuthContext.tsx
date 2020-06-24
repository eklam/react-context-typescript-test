import React, { useState, ReactNode } from "react";
import { AuthState } from "./types";

const Authmko = {
    auth: undefined as AuthState | undefined,
    login: (loginData: AuthState) => { },
    logout: () => { },
}

export function useAuth() {
    const [auth, setAuth] = useState<AuthState | undefined>(undefined)

    return { auth, login: setAuth, logout: () => setAuth(undefined) }
}

export const AuthContext = React.createContext(Authmko);

export function AuthContextProvider(props: { children: ReactNode }) {
    const [auth, login] = useState<AuthState | undefined>(undefined)

    return (
        <div>
            <AuthContext.Provider value={{ auth, login, logout: () => login(undefined) }}>
                {props.children}
            </AuthContext.Provider>
        </div>
    );
}
