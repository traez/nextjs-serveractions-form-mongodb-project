"use server";
import dbConnect from "./dbConnect";
import Contact from "@/models/Contact";
import { writeFile } from "fs/promises";
import { join } from "path";

export const getContacts = async () => {
  try {
    dbConnect();
    const contacts = await Contact.find({});
    return contacts;
  } catch (error) {
    throw new Error("Failed To Get Contacts " + error);
  }
};

export const getContact = async (id) => {
  try {
    dbConnect();
    const contact = await Contact.findById(id);
    return contact;
  } catch (error) {
    throw new Error("Failed To Get Contact " + error);
  }
};

export const upload = async (data) => {
  const file = data.get("file");
  if (!file) {
    throw new Error("No file uploaded");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Handle file data as needed (replace with your logic)
  const uploadPath = join(process.cwd(), "uploads", file.name);
  await writeFile(uploadPath, buffer);
  console.log(`Open ${uploadPath} to see the uploaded file`);
  console.log(buffer);

  return { success: true };
};
