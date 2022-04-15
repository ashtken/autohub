import Nav from "./Nav";
import { FaCar } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import styled from "@emotion/styled";
import Link from "next/link";

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
				color: #afafaf;
			}
		}
	}
`;

const MobileHeader = () => {
	return (
		<HeaderContainer>
			<div>
				<Link href={"/"}>
					<a>
						<FaCar />
					</a>
				</Link>
				<Link href={"/"}>
					<a>
						<HiOutlineUserCircle />
					</a>
				</Link>
			</div>
			<Nav />
		</HeaderContainer>
	);
};

export default MobileHeader;
