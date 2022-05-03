import { signOut } from "next-auth/react";
import styled from "@emotion/styled";

const Button = styled.button`
	cursor: pointer;
	border: 0;
	width: 100%;
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
`;

const SignOutButton = () => {
	return <Button onClick={() => signOut()}>Sign Out</Button>;
};

export default SignOutButton;
