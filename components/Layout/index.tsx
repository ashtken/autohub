import MobileHeader from "./MobileHeader";
import Header from "./Header";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const index = ({ children }: Props) => {
	return (
		<>
			<Header />
			<MobileHeader />
			<main>{children}</main>
		</>
	);
};

export default index;
