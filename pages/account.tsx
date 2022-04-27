import type { NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import ProfilePicture from "../components/ProfilePicture";
import AccountData from "../components/AccountData";
import SignOutButton from "../components/SignOutButton";
import Listings from "../components/Listings";

const AccountContainer = styled.div`
	@media (min-width: 401px) {
		margin-top: 3rem;
		margin-left: 2rem;
	}
`;

const AccountSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 1rem;
	margin-right: 1rem;
	& > div {
		@media (min-width: 401px) {
			margin-right: 3rem;
		}
		& > div {
			margin-bottom: 2rem;
		}
	}
	@media (min-width: 801px) {
		flex-direction: row;
	}
`;

const Picture = styled.div`
	@media (max-width: 400px) {
		display: none;
	}
`;
const PictureMobile = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 2rem;
	@media (min-width: 401px) {
		display: none;
	}
`;

const Account: NextPage = () => {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			signIn(undefined, { callbackUrl: "/account" });
		},
	});
	return (
		<Layout title={"My Account | Autohub"}>
			<AccountContainer>
				<AccountSection>
					<div>
						<div>
							<PictureMobile>
								<ProfilePicture width={100} height={100} />
							</PictureMobile>
							<Picture>
								<ProfilePicture width={300} height={300} />
							</Picture>
						</div>
						<div>
							<SignOutButton />
						</div>
						<div>
							<AccountData />
						</div>
					</div>
					<Listings />
				</AccountSection>
			</AccountContainer>
		</Layout>
	);
};

export default Account;
