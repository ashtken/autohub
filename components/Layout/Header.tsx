import Nav from "./Nav";
import { FaCar } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import styled from "@emotion/styled";
import Link from "next/link";

const HeaderContainer = styled.header`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 97vh;
	color: #f7f7f7;
	font-size: xx-large;
	font-weight: 500;
	margin: 1rem;
	@media (max-width: 400px) {
		display: none;
	}
	& > div {
		& > a {
			display: flex;
			align-items: center;
			padding-top: 1rem;
			padding-bottom: 1rem;
			padding-left: 1rem;
			:hover {
				color: #afafaf;
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

const Header = () => {
	return (
		<HeaderContainer>
			<div>
				<Link href={"/"}>
					<a>
						<FaCar />
					</a>
				</Link>
				<div>
					<Nav />
				</div>
			</div>
			<div>
				<Link href={"/"}>
					<a>
						<HiOutlineUserCircle />
						<span>Ashley Kennedy</span>
					</a>
				</Link>
			</div>
		</HeaderContainer>
	);
};

export default Header;
