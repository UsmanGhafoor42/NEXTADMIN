"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { User, Product } from "../lib/models";
import { connectToDB } from "../lib/utils";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);
    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });
        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to Add User!");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};
export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);
    try {
        connectToDB();
        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };
        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) &&
                delete updateFields[key]
        );
        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update User!");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};
export const addProduct = async (formData) => {
    console.log("formData: ", formData);

    const { title, desc, price, stock, color, size, category } =
        Object.fromEntries(formData);

    try {
        connectToDB();
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
            category,
        });
        await newProduct.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to Add Product!");
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size, category } =
        Object.fromEntries(formData);
    try {
        connectToDB();
        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size,
            category,
        };
        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) &&
                delete updateFields[key]
        );
        await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update Product!");
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDB();

        await Product.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to Delete Product!");
    }
    revalidatePath("/dashboard/products");
};
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDB();

        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to Delete User!");
    }
    revalidatePath("/dashboard/users");
};

export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        if (err.message.includes("CredentialsSignin")) {
            return "Wrong Credentials";
        }
        throw err;
    }
};
