import { ILogin } from "@/interfaces/ILogin";
import { IRegister } from "@/interfaces/IRegister";
import { IToken } from "@/interfaces/IToken";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
export async function Register(user: IRegister) {
  try {
    const res = await fetch(`${apiURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Error al registrar usuario: ${errorMessage}`);
    }

    const registro = await res.json();
    return registro;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export async function LoginUser(
  user: ILogin
): Promise<{ token: string; user: any }> {
  try {
    const res = await fetch(`${apiURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Error al iniciar sesion: ${errorMessage}`);
    }

    const login = await res.json();

    return login;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export async function getOrders(userToken: string) {
  try {
    const res = await fetch(`${apiURL}/users/orders`, {
      method: "GET",
      headers: {
        Authorization: userToken,
        "Content-Type": "application/json",
      },
    });

    const orders = await res.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
}
