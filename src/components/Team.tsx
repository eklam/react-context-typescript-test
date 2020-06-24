import React, { useContext } from "react";
import { useTeam } from "../context/TeamContext";
import { AuthContext } from "../context/AuthContext";

const Team = () => {
  const { auth, login, logout } = useContext(AuthContext)
  const { team } = useTeam();

  const handleLogin = () => {
    // enviaria o email e senha para o backend e receberia o fakeData
    const apiCall = (ms: number) => new Promise((r) => setTimeout(r, ms));
    apiCall(2000).then(() => {
      const fakeData = {
        id: 10,
        email: "rodgarcialima@gmail.com",
        firstName: "Rodrigo",
        lastName: "Lima",
      };
      login(fakeData);
    });
  };

  return (
    <>
      <div style={{ backgroundColor: 'grey' }}>
        {!auth &&
          <>
            <button onClick={handleLogin}>Login</button>
            <br />
          </>
        }
        {auth &&
          <>
            <button onClick={logout}>Logout</button>
            <br />
            <span>Nome: {auth.firstName}</span>
            <br />
            <span>Email: {auth.email}</span>
          </>
        }
      </div>
      <br />
      <div style={{ backgroundColor: 'white' }}>
        <span>Nome: {team.name}</span>
        <br />
        <span>Logo: {team.logo}</span>
      </div>
      <br />
    </>
  );
};

export default Team;
