import { Computer } from "@/types";

export async function getComputers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/computers`, {
      cache: "force-cache",
      next: {
        revalidate: 120,
        tags: ["computers-fetch"],
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("API Response: " + error);
  }
}

export async function updateComputers(computer: Computer) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/computers/${computer.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(computer),
      }
    );

    const data = await res.json();

    console.warn("Update method response: ", data);

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("API Response: " + error);
  }
}

export async function createComputers(computer: Computer) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/computers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(computer),
    });

    const data = await res.json();

    console.warn("Post method response: ", data);

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("API Response: " + error);
  }
}

export async function deleteComputers(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/computers/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    console.warn("Delete method response: ", data);

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("API Response: " + error);
  }
}
