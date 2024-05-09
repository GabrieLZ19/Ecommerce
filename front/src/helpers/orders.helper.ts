const apiURL = process.env.NEXT_PUBLIC_API_URL;

export async function crearOrders(products: number[], token: string) {
  try {
    const res = await fetch(`${apiURL}/orders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`${errorMessage}`);
    }
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}
