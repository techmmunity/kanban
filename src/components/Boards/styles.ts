import { FaPlus } from "react-icons/fa";

import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 0.25rem;
	list-style: none;
`;

export const Board = styled.li<{ background?: string }>`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 25rem;
		height: 15rem;
		background: ${({ background }) =>
			background ? `url(${background})` : Colors["background-board"]};
		background-position: center;
		background-size: cover;
		color: ${Colors.primary};
		border-radius: 7px;
		outline: transparent;
		text-align: center;
		text-decoration: none;
		transform: scale(0.9);
		transition: transform 0.2s ease;
		cursor: pointer;

		&:hover,
		&:focus,
		&:active {
			transform: scale(1);
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			background: ${`${Colors.black}80`};
			border-radius: inherit;

			> span {
				font-size: 2.4rem;
				font-weight: bold;
				margin: 1rem;
			}
		}
	}
`;

export const CreateBoard = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 25rem;
	height: 15rem;
	background: ${Colors["background-board"]};
	color: ${Colors.primary};
	border: 0;
	border-radius: 7px;
	outline: transparent;
	transform: scale(0.9);
	transition: transform 0.2s ease;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		transform: scale(1);
	}

	> span {
		font-size: 2.4rem;
		font-weight: bold;
	}
`;

export const PlusIcon = styled(FaPlus)`
	width: 3rem;
	height: 3rem;
	margin-bottom: 1rem;
`;
