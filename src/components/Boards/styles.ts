import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 0.25rem;
	list-style: none;
`;

export const Board = styled.li<{ url_image?: string }>`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 25rem;
		height: 15rem;
		background: ${({ url_image }) =>
			url_image ? `url(${url_image})` : Colors["background-board"]};
		background-position: center;
		background-size: cover;
		color: ${Colors.primary};
		border-radius: 7px;
		text-align: center;
		text-decoration: none;
		transform: scale(0.9);
		transition: transform 0.2s ease;
		cursor: pointer;
		outline: transparent;

		&:hover,
		&:focus,
		&:active {
			transform: scale(1);
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			min-width: 100%;
			width: 100%;
			max-width: 100%;
			min-height: 100%;
			height: 100%;
			max-height: 100%;
			background: #00000080;
			border-radius: 7px;

			> span {
				font-size: 2.4rem;
				font-weight: bold;
				margin: 1rem;
			}
		}
	}
`;

export const GhostBoard = styled.li`
	width: 25rem;
	height: 15rem;
	background: ${Colors["background-board"]};
	border-radius: 7px;
	transform: scale(0.9);
	transition: transform 0.2s ease;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		transform: scale(1);
	}
`;
