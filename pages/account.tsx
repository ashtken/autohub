import type { GetServerSideProps, NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { useSession, signIn, getSession } from "next-auth/react";
import ProfilePicture from "../components/ProfilePicture";
import AccountData, { UserProps } from "../components/AccountData";
import SignOutButton from "../components/SignOutButton";
import Listings from "../components/Listings";
import prisma from "../lib/prisma";

const AccountContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;
`;

const AccountDetails = styled.div`
	display: flex;
	flex-direction: column;
	width: 95%;
	@media (min-width: 721px) {
		flex-direction: row;
		width: 80%;
		& > div {
			margin-right: 2rem;
		}
	}
`;

const Picture = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
	@media (max-width: 400px) {
		display: none;
	}
`;
const PictureMobile = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
	@media (min-width: 401px) {
		display: none;
	}
`;

const SignOutContainer = styled.div`
	margin-bottom: 2rem;
`;

const AccountDataContainer = styled.div`
	@media (max-width: 720px) {
		margin-bottom: 2rem;
	}
`;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await getSession({ req });
	if (!session) {
		res.statusCode = 403;
		return { props: { user: [] } };
	}

	const user = await prisma.user.findUnique({
		where: {
			email: session.user?.email!,
		},
		select: {
			email: true,
			name: true,
			image: true,
			contactNumber: true,
			address: {
				select: {
					firstLine: true,
					secondLine: true,
					thirdLine: true,
					city: true,
					county: true,
					postcode: true,
					country: true,
				},
			},
		},
	});
	return { props: { user } };
};

type Props = {
	user: UserProps;
};

const Account: NextPage<Props> = (props) => {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			signIn(undefined, { callbackUrl: "/account" });
		},
	});
	return (
		<Layout title={"My Account | Autohub"}>
			<AccountContainer>
				<AccountDetails>
					<div>
						<PictureMobile>
							<ProfilePicture width={100} height={100} />
						</PictureMobile>
						<Picture>
							<ProfilePicture width={300} height={300} />
						</Picture>
						<SignOutContainer>
							<SignOutButton />
						</SignOutContainer>
						<AccountDataContainer>
							<AccountData user={props.user} />
						</AccountDataContainer>
					</div>
					<Listings />
				</AccountDetails>
			</AccountContainer>
		</Layout>
	);
};

export default Account;
