import React from "react";
import Team from "./components/Team";
import AuthContext, { useAuth } from "./context/AuthContext";

function App() {
  const authState = useAuth()
  return (
    <div>
      <AuthContext.Provider value={authState.auth}>
        <Team />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
