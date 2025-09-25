import NextAuth from "next-auth";

// Minimal config for middleware (no database/bcrypt operations)
const authConfig = {
  providers: [],
  callbacks: {
    authorized({ token }) {
      return !!token;
    },
  },
};

export const { auth } = NextAuth(authConfig);
