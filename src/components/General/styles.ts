import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.section`
	display: flex;
`;

export const SectionTitle = styled.h2`
	font-size: 3.2rem;
`;

export const Form = styled.form`
	width: 100%;
	padding-left: 15rem;
`;

export const BoardTitle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const BoardBackground = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
`;

export const Title = styled.span`
	font-size: 2rem;
`;

export const Backgrounds = styled.div`
	display: flex;
	margin: 1rem 0;
`;

export const Background = styled.input`
	display: none;
`;

export const Label = styled.label`
	min-width: 20rem;
	width: 20rem;
	max-width: 20rem;
	min-height: 12rem;
	height: 12rem;
	max-height: 12rem;
	background: transparent;
	border: 0;
	outline: transparent;
	transform: scale(0.9);
	transition: transform 0.2s ease;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		transform: scale(1);
	}

	${Background}:checked + & {
		> div {
			border: 3px solid ${Colors.primary};
		}
	}

	> div {
		border-radius: 7px;
	}
`;

export const OthersBackground = styled.div`
	display: flex;
	padding-bottom: 1rem;
	margin: 0 1.5rem;
	overflow-x: auto;

	::-webkit-scrollbar {
		height: 7px;
	}

	::-webkit-scrollbar-thumb {
		background: ${Colors.scroll};
		border-radius: 3px;
	}
`;

export const ChangeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 2rem 0;

	> input {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10rem;
		height: 4.5rem;
		background: ${Colors["background-input-change"]};
		color: ${Colors.primary};
		font-size: 1.7rem;
		border: 0;
		border-radius: 5px;
		outline: transparent;
		transition: background-color 0.2s ease;
		cursor: pointer;

		&:hover,
		&:focus,
		&:active {
			background: ${Colors["background-input-change-hover"]};
		}
	}
`;
