import React, {
	SyntheticEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { HiX } from "react-icons/hi";

const StyledModalBody = styled.div`
	padding-top: 10px;
`;

const StyledModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 25px;
	& > a {
		color: white;
	}
`;

const StyledModal = styled.div`
	background: #13151d;
	height: 100%;
	width: 100%;
	border-radius: 15px;
	padding: 15px;
`;

const StyledModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(211, 211, 211, 0.5);
`;

const StyledModalWrapper = styled.div`
	width: 500px;
	height: 600px;
`;

type Props = {
	show: boolean;
	setShow: Function;
	onClose: Function;
	children: React.ReactNode;
};

const Modal = ({ show, setShow, onClose, children }: Props) => {
	const [isBrowser, setIsBrowser] = useState(false);
	const modalRef = useRef(null);

	const MouseClick = useCallback(
		(e: MouseEvent) => {
			if (e.target === modalRef.current) {
				setShow(false);
			}
		},
		[setShow]
	);

	const keyPress = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape" && show) {
				setShow(false);
			}
		},
		[show, setShow]
	);

	useEffect(() => {
		setIsBrowser(true);

		document.addEventListener("keydown", keyPress);
		window.addEventListener("click", MouseClick);
		return () => {
			document.removeEventListener("click", MouseClick);
			window.removeEventListener("keydown", keyPress);
		};
	}, [keyPress, MouseClick]);

	const handleCloseClick = (e: SyntheticEvent) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<StyledModalOverlay ref={modalRef}>
			<StyledModalWrapper>
				<StyledModal>
					<StyledModalHeader>
						<a href="#" onClick={handleCloseClick}>
							<HiX />
						</a>
					</StyledModalHeader>
					<StyledModalBody>{children}</StyledModalBody>
				</StyledModal>
			</StyledModalWrapper>
		</StyledModalOverlay>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById("modal-root")!
		);
	} else {
		return null;
	}
};

export default Modal;
