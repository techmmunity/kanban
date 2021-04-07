import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.main`
	> section {
		> header {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 7.2rem;
			padding: 5rem;
		}
	}
`;

export const ArrowLeftContainer = styled.div`
	position: absolute;
	left: 0;

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3.8rem;
		height: 3.8rem;
		background: ${Colors["background-icon-container"]};
		color: ${Colors.primary};
		border-radius: 3px;
		outline: transparent;
		margin-left: 22rem;
		transition: background-color 0.2s ease;
		cursor: pointer;

		&:hover,
		&:focus,
		&:active {
			background: ${Colors["background-icon-container-hover"]};
		}
	}
`;

export const ArrowLeftIcon = styled(HiOutlineArrowNarrowLeft)`
	width: 2.25rem;
	height: 2.25rem;
`;

export const Title = styled.h1`
	font-size: 3.6rem;
`;

export const Sections = styled.div`
	padding: 2.5rem 25rem;
`;
