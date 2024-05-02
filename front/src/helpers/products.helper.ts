import { IProducto } from "@/interfaces/IProducto";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB() {
  try {
    const res = await fetch(`${apiURL}/products`);

    const products: IProducto[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProducts() {
  try {
    const productsDB = await getProductsDB();
    return productsDB;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductsById(id: string) {
  try {
    const products = await getProducts();
    const product = products.find((product) => product.id.toString() === id);
    if (!product) throw new Error("Product no encontrado");
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
