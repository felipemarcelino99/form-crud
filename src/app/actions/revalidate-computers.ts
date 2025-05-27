"use server";
import { revalidateTag } from "next/cache";

export async function revalidateComputersTag() {
  revalidateTag("computers-fetch");
}
