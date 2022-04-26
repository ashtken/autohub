import type { NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { useSession, signIn } from "next-auth/react";

const Account: NextPage = () => {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			signIn(undefined, { callbackUrl: "/account" });
		},
	});
	return (
		<Layout title={"My Account | Autohub"}>
			<h1>Account</h1>
		</Layout>
	);
};

export default Account;
