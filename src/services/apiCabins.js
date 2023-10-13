import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
// API used for creating a cabins
export const getCabins = async function () {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }

  return data;
};
//API USED FOR CREATING CUBINS
export const CreateCabins = async function (newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //create new cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cabin could not be created");
  }

  //upload file
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }
  return data;
};
// API used for deleting a cabin
export const deleteCabin = async function (id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabin could not be deleted");
  }
};
