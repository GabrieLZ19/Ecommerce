export interface IToken {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}
