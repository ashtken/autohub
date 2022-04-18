import MobileHeader from "./MobileHeader";
import Header from "./Header";
import Head from "next/head";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const LayoutContainer = styled.div`
	display: flex;
	@media (max-width: 400px) {
		flex-direction: column;
	}
`;

type Props = {
	children: ReactNode;
	title: String;
};

const index = ({ children, title = "Autohub" }: Props) => {
	return (
		<LayoutContainer>
			<div>
				<Head>
					<title>{title}</title>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<Header />
				<MobileHeader />
			</div>
			<main>{children}</main>
		</LayoutContainer>
	);
};

export default index;
