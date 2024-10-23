import { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // If no error and we have user data, return it
        if (credentials?.password === process.env.KEY) {
          return {} as User;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};
