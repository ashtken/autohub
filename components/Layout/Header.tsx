import Nav from "./Nav";
import { FaCar } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProfilePicture from "../ProfilePicture";

const HeaderContainer = styled.header`
	top: 0;
	left: 0;
	height: 100vh;
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: #f7f7f7;
	font-size: xx-large;
	font-weight: 500;
	padding-left: 1rem;
	@media (max-width: 400px) {
		display: none;
	}
	@media (min-width: 1301px) {
		align-items: flex-start;
		width: fit-content;
	}
	& > div {
		& > a {
			display: flex;
			align-items: center;
			padding-top: 1rem;
			padding-bottom: 1rem;

			:hover {
				color: #58c2ff;
			}
			& > span {
				margin-left: 1rem;
				font-size: small;
				font-weight: 200;
				@media (max-width: 1300px) {
					display: none;
				}
			}
		}
	}
`;

const Logo = styled.a`
	color: #58c2ff;
	text-align: center;
`;

const Header = () => {
	const { data: session } = useSession();
	return (
		<HeaderContainer>
			<div>
				<Link href={"/"} passHref>
					<Logo>
						<FaCar />
					</Logo>
				</Link>
				<Nav />
			</div>
			<div>
				{session ? (
					<Link href={"/account"}>
						<a>
							{session.user?.image ? (
								<ProfilePicture width={35} height={35} />
							) : (
								<HiOutlineUserCircle />
							)}
							<span>{session.user?.name}</span>
						</a>
					</Link>
				) : (
					<Link href={"/api/auth/signin"}>
						<a>
							<HiOutlineUserCircle />
							<span>Sign in/Join</span>
						</a>
					</Link>
				)}
			</div>
		</HeaderContainer>
	);
};

export default Header;
