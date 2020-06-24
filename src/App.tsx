import React from "react";
import Team from "./components/Team";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Team />
      </AuthContextProvider>
    </div>
  );
}

export default App;
