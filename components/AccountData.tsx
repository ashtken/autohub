import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import {
	HiOutlinePhone,
	HiOutlineHome,
	HiOutlineMail,
	HiOutlineUser,
} from "react-icons/hi";

const AccountDetailsContainer = styled.div`
	background-color: #1e36441c;
	color: #58c2ff;
	font-weight: 500;
	border: 2px #58c2ff solid;
	border-radius: 5px;
	padding: 1rem;
	transition: 0.3s;
	overflow: hidden;
`;

const ContactDetails = styled.div`
	display: flex;
	align-items: center;
	& > div {
		font-size: large;
	}
	& > h1 {
		font-size: small;
		font-weight: 500;
		padding-left: 1rem;
	}
`;

const AddressContainer = styled.div`
	display: flex;
	align-items: center;
	padding-top: 0.5rem;
	& > div {
		align-self: start;
		font-size: large;
	}
`;

const Address = styled.div`
	& > h2 {
		font-size: small;
		font-weight: 500;
		padding-left: 1rem;
		padding-bottom: 0.5rem;
		margin: 0;
	}
`;

const EditButton = styled.button`
	cursor: pointer;
	border: 0;
	width: 100%;
	background-color: #58c2ff;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	margin-top: 1rem;
	color: #fff;
	font-weight: 600;
	border-radius: 5px;
	transition: 0.3s;
	&:hover {
		background-color: #36aaee;
	}
`;

const AccountData = () => {
	const { data: session } = useSession();
	return (
		<AccountDetailsContainer>
			<ContactDetails>
				<div>
					<HiOutlineUser />
				</div>
				<h1>{session?.user?.name}</h1>
			</ContactDetails>
			<ContactDetails>
				<div>
					<HiOutlineMail />
				</div>
				<h1>{session?.user?.email}</h1>
			</ContactDetails>
			<ContactDetails>
				<div>
					<HiOutlinePhone />
				</div>
				<h1>07429954125</h1>
			</ContactDetails>
			<AddressContainer>
				<div>
					<HiOutlineHome />
				</div>
				<Address>
					<h2>FirstLine</h2>
					<h2>SecondLine</h2>
					<h2>ThirdLine</h2>
					<h2>City</h2>
					<h2>County</h2>
					<h2>Postcode</h2>
				</Address>
			</AddressContainer>
			<EditButton>Edit</EditButton>
		</AccountDetailsContainer>
	);
};

export default AccountData;
