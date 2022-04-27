import styled from "@emotion/styled";
import { HiOutlinePlusSm } from "react-icons/hi";

const ListingsContainer = styled.div`
	background-color: #1e36441c;
	color: #58c2ff;
	font-weight: 500;
	border: 2px #58c2ff solid;
	border-radius: 5px;
	padding: 1rem;
	transition: 0.3s;
	overflow: hidden;
	& > div {
		display: flex;
		justify-content: space-between;
		& > h1 {
			font-size: large;
		}
	}
`;

const ListingsButton = styled.button`
	cursor: pointer;
	border: 0;
	background-color: #58c2ff;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	color: #fff;
	font-weight: 600;
	border-radius: 5px;
	transition: 0.3s;
	&:hover {
		background-color: #36aaee;
	}
`;

const Listings = () => {
	return (
		<ListingsContainer>
			<div>
				<h1>My Listings</h1>
				<ListingsButton>
					<HiOutlinePlusSm />
				</ListingsButton>
			</div>
		</ListingsContainer>
	);
};

export default Listings;
