'use server'
import Contact from "@/models/Contact"
import dbConnect from "./dbConnect"
import { revalidatePath } from "next/cache"
import {redirect} from "next/navigation"


export const addContact = async(FormData) => {
    const {firstName, isNigerian, email, phone} = 
    Object.fromEntries(FormData)
    try {
        dbConnect()
        const newContact = new Contact({
            firstName, isNigerian, email, phone
        })
        await newContact.save()
    } catch (error) {
        throw new Error ("Failed To Create Contact " + error)
    }
    revalidatePath("/")
    redirect("/")
}

export const updateContact = async (FormData) => {
    const {id, firstName, isNigerian, email, phone} = 
    Object.fromEntries(FormData)
    try {
        dbConnect()
        const updateFields = {
            firstName, isNigerian, email, phone
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key] )
        await Contact.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        throw new Error("Failed To Update Contact " + error)
    }
    revalidatePath("/")
    redirect("/")
}

export const deleteContact = async (FormData) => {
    const {id} = Object.fromEntries(FormData)
    try {
        dbConnect()
        await Contact.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed To Delete Contact " + error)
        
    }
    revalidatePath("/")

}