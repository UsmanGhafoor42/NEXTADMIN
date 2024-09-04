import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
    try {
        await connectToDB(); // Ensure await is used here
        const user = await User.findOne({ username: credentials.username });
        if (!user) throw new Error("Wrong Credentials!");

        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        );

        if (!isPasswordCorrect) throw new Error("Wrong Credentials!");

        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to Login!");
    }
};

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        credentials({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            if (!token.sub) return token;

            const user = await User.findById(token.sub);

            if (!user) return token;

            token.name = user.username;
            token.img = user.img;
            return token;
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.name = token.name;
                session.user.img = token.img;
            }
            return session;
        },
    },
    session: { strategy: "jwt" },
});
