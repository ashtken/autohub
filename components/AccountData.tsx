import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {
	HiOutlinePhone,
	HiOutlineHome,
	HiOutlineMail,
	HiOutlineUser,
} from "react-icons/hi";
import Modal from "./Modal";
import UserDetailsForm from "./UserDetailsForm";

const AccountDetailsContainer = styled.div`
	background-color: #13151d;
	color: #fff;
	font-weight: 500;
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
	background-color: #0063e5;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	margin-top: 1rem;
	color: #fff;
	font-weight: 600;
	border-radius: 5px;
	transition: 0.3s;
	&:hover {
		background-color: #016cf9;
	}
`;

type UserProps = {
	image: string | null;
	email: string | null;
	name: string | null;
	contactNumber: string | null;
	address: [
		{
			firstLine: string;
			secondLine: string | null;
			thirdLine: string | null;
			city: string;
			county: string | null;
			postcode: string;
			country: string;
		}
	];
};

const AccountData: React.FC<{ user: UserProps }> = ({ user }) => {
	const [showModal, setShowModal] = useState(false);

	const { data: session } = useSession();
	return (
		<AccountDetailsContainer>
			<ContactDetails>
				<div>
					<HiOutlineUser />
				</div>
				<h1>{user.name ? user.name : "-"}</h1>
			</ContactDetails>
			<ContactDetails>
				<div>
					<HiOutlineMail />
				</div>
				<h1>{user.email ? user.email : "-"}</h1>
			</ContactDetails>
			<ContactDetails>
				<div>
					<HiOutlinePhone />
				</div>
				<h1>{user.contactNumber ? user.contactNumber : "-"}</h1>
			</ContactDetails>
			<AddressContainer>
				<div>
					<HiOutlineHome />
				</div>
				<Address>
					{user.address ? (
						<>
							<h2>{user.address[0].firstLine}</h2>
							<h2>{user.address[0].secondLine}</h2>
							<h2>{user.address[0].thirdLine}</h2>
							<h2>{user.address[0].city}</h2>
							<h2>{user.address[0].county}</h2>
							<h2>{user.address[0].postcode}</h2>
							<h2>{user.address[0].country}</h2>
						</>
					) : (
						"-"
					)}
				</Address>
			</AddressContainer>
			<EditButton onClick={() => setShowModal(true)}>Edit</EditButton>
			<Modal
				onClose={() => setShowModal(false)}
				show={showModal}
				setShow={setShowModal}
			>
				<UserDetailsForm />
			</Modal>
		</AccountDetailsContainer>
	);
};

export default AccountData;
