import styled from "@emotion/styled";
import { HiOutlinePlusSm } from "react-icons/hi";

const ListingsContainer = styled.div`
	background-color: #13151d;
	color: #fff;
	font-weight: 500;
	border-radius: 5px;
	padding: 1rem;
	overflow: hidden;
	width: 100%;
	& > div {
		display: flex;
		justify-content: space-between;
		& > h1 {
			font-size: large;
		}
	}
`;

const NoListings = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 15rem;
	margin-bottom: 15rem;
	& > button {
		cursor: pointer;
		border: 0;
		width: 10rem;
		background-color: #0063e5;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		color: #fff;
		font-weight: 600;
		border-radius: 5px;
		transition: 0.3s;
		&:hover {
			background-color: #016cf9;
		}
	}
`;

const ListingsButton = styled.button`
	cursor: pointer;
	border: 0;
	background-color: #0063e5;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	color: #fff;
	font-weight: 600;
	border-radius: 5px;
	transition: 0.3s;
	&:hover {
		background-color: #016cf9;
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
			<NoListings>
				<h1>No Listings!</h1>
				<button>Add Listing</button>
			</NoListings>
		</ListingsContainer>
	);
};

export default Listings;
