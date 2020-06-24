export interface AuthState {
  id: number | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
