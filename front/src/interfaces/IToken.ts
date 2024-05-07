import { Dispatch, SetStateAction } from "react";

export interface IToken {
  token?: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}
