import supabase from "./supabase.js";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log("Cabins could ot be loaded.");
    throw new Error("Cabins could ot be loaded.");
  }

  return data;
}
