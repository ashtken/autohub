import Nav from "./Nav";
import { FaCar } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProfilePicture from "../ProfilePicture";

const HeaderContainer = styled.header`
	color: #f7f7f7;
	font-size: x-large;
	font-weight: 500;
	height: 3rem;
	background-color: #060c10;
	border-bottom: solid #464646 0.1rem;
	@media (min-width: 401px) {
		display: none;
	}
	& > div {
		display: flex;
		justify-content: space-between;
		padding-top: 0.5rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		& > a {
			:hover {
				color: #58c2ff;
			}
		}
	}
`;

const Logo = styled.a`
	color: #58c2ff;
`;

const MobileHeader = () => {
	const { data: session } = useSession();
	return (
		<HeaderContainer>
			<div>
				<Link href={"/"} passHref>
					<Logo>
						<FaCar />
					</Logo>
				</Link>
				{session ? (
					<Link href={"/account"}>
						<a>
							{session.user?.image ? (
								<ProfilePicture width={30} height={30} />
							) : (
								<HiOutlineUserCircle />
							)}
						</a>
					</Link>
				) : (
					<Link href={"/api/auth/signin"}>
						<a>
							<HiOutlineUserCircle />
						</a>
					</Link>
				)}
			</div>
			<Nav />
		</HeaderContainer>
	);
};

export default MobileHeader;
