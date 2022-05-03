import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import TwitterProvider from "next-auth/providers/twitter";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		// EmailProvider({
		//   server: process.env.EMAIL_SERVER,
		//   from: process.env.EMAIL_FROM,
		// }),
		// AppleProvider({
		//   clientId: process.env.APPLE_ID,
		//   clientSecret: {
		//     appleId: process.env.APPLE_ID,
		//     teamId: process.env.APPLE_TEAM_ID,
		//     privateKey: process.env.APPLE_PRIVATE_KEY,
		//     keyId: process.env.APPLE_KEY_ID,
		//   },
		// }),
		// Auth0Provider({
		//   clientId: process.env.AUTH0_ID,
		//   clientSecret: process.env.AUTH0_SECRET,
		//   // @ts-ignore
		//   domain: process.env.AUTH0_DOMAIN,
		// }),
		// FacebookProvider({
		//   clientId: process.env.FACEBOOK_ID,
		//   clientSecret: process.env.FACEBOOK_SECRET,
		// }),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			// @ts-ignore
			scope: "read:user",
		}),
		// GoogleProvider({
		//   clientId: process.env.GOOGLE_ID,
		//   clientSecret: process.env.GOOGLE_SECRET,
		// }),
		//   TwitterProvider({
		//     clientId: process.env.TWITTER_ID,
		//     clientSecret: process.env.TWITTER_SECRET,
		//   }),
	],
	callbacks: {
		session: async ({ session, user }) => {
			session.userId = user.id;
			return Promise.resolve(session);
		},
	},
});
