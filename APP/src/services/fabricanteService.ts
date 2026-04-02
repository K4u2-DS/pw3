
import type { Fabricante } from "../types/fabricante";


//colocar a url da api, e deixar ela publica

const API_URL = "https://upgraded-tribble-r469g5qx5jp9h5wwp-3000.app.github.dev/fabricantes";

export async function getFabricante(): Promise<Fabricante[]> {
  const response = await fetch(API_URL);
  return response.json();
}