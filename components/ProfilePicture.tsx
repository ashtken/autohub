import { HiOutlineUserCircle } from "react-icons/hi";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import Image, { ImageLoaderProps } from "next/image";

const ImgContainer = styled.div<Props>`
	border-radius: 50%;
	overflow: hidden;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
`;

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

type Props = {
	width: number;
	height: number;
};

const ProfilePicture = ({ width, height }: Props) => {
	const { data: session } = useSession();
	return (
		<>
			{session?.user?.image ? (
				<ImgContainer width={width} height={height}>
					<Image
						loader={myLoader}
						src={session.user.image}
						alt="Profile Picture of User"
						width={width}
						height={height}
					/>
				</ImgContainer>
			) : (
				<HiOutlineUserCircle />
			)}
		</>
	);
};

export default ProfilePicture;
