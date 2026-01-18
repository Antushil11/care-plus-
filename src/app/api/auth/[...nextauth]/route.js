import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connect } from "@/app/lib/dbConnect";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },

      async authorize(credentials) {
        const userCollection = await connect("users");

        const user = await userCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.photoURL,
          role: user.role || "user",
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
   
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const users = await connect("users");

      const isUserExist = await users.findOne({ email: user.email });
      if (!isUserExist) {
        await users.insertOne({
          name: user.name,
          email: user.email,
          image: user.image,
          role:"user"
        })
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      if (token?.role) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user?.role) {
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
