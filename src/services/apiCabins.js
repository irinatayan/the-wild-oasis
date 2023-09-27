import supabase from "./supabase.js";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log("Cabins could not be loaded.");
    throw new Error("Cabins could not be loaded.");
  }

  return data;
}

export async function createCabin(newCabin) {

  const { data, error } = await supabase
      .from('cabins')
      .insert([
        newCabin,
      ])
      .select()

  if (error) {
    throw new Error("Cabins could not be created.");
  }

  return data
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(`Cabins could not be deleted. ${error.message}`);
    throw new Error(`Cabins could not be deleted. ${error.message}`);
  }

  return data;
}
