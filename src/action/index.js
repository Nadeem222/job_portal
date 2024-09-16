import connectToDB from "@/database";
import profile from "@/models/profile";
import { revalidatePath } from "next/cache";









export async function createProfile(formData, pathToRevalidate) {

    await connectToDB()
    await profile.create(formData);
    revalidatePath(pathToRevalidate)

}

export const fetchProfileAction = async(id) =>{
await connectToDB();
const result = await profile.findOne({userId : id})

return JSON.parse(JSON.stringify(result));

}