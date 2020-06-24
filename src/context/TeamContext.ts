import React, { useState } from "react";
import { Team } from "./types";

const initialState: Team = {
    id: 0,
    name: `Team`,
    logo: ``,
};

export function useTeam() {
    const [team, setTeam] = useState(initialState)
    
    return { team, switchTeam: setTeam }
}

export default React.createContext(initialState);
