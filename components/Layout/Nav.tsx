import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";

import Link from "next/link";
import styled from "@emotion/styled";

const NavContainer = styled.nav`
	color: #f7f7f7;
	font-size: x-large;
	font-weight: 500;
	margin: 0;
	@media (max-width: 400px) {
		height: 3rem;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #060c10;
		/* border-top: solid #464646 0.1rem; */
		border-radius: 25px;
		margin-bottom: 0.5rem;
	}
	@media (min-width: 401px) {
		display: flex;
		flex-direction: column;
		font-size: large;
		padding-top: 2rem;
	}
	@media (min-width: 1301px) {
		align-items: flex-start;
		width: fit-content;
	}
	& > a {
		:hover {
			color: #58c2ff;
		}
		@media (min-width: 401px) {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-bottom: 2rem;
		}
		& > span {
			margin-left: 1rem;
			@media (max-width: 1300px) {
				display: none;
			}
		}
	}
`;

const Nav = () => {
	return (
		<NavContainer>
			<Link href={"/"} passHref>
				<a>
					<HiOutlineHome />
					<span>Home</span>
				</a>
			</Link>
			<Link href={"/"} passHref>
				<a>
					<HiOutlineSearch />
					<span>Search</span>
				</a>
			</Link>
			<Link href={"/"} passHref>
				<a>
					<HiOutlineMail />
					<span>Messages</span>
				</a>
			</Link>
			<Link href={"/"} passHref>
				<a>
					<HiOutlineHeart />
					<span>Saved</span>
				</a>
			</Link>
		</NavContainer>
	);
};

export default Nav;
