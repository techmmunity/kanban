import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.div`
	min-height: calc(100vh - 5.6rem);
	height: calc(100vh - 5.6rem);
	max-height: calc(100vh - 5.6rem);
`;

export const Columns = styled.ul`
	display: flex;
	height: 100%;
	list-style: none;
	overflow-x: auto;

	::-webkit-scrollbar {
		width: 5px;
		height: 12px;
	}

	::-webkit-scrollbar-thumb {
		background: ${Colors.scroll};
		border-radius: 3px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	> div {
		max-height: 100%;
	}
`;

export const Tasks = styled.ul`
	padding: 0 0.5rem;
	list-style: none;
	overflow-y: auto;

	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-thumb {
		background: ${Colors.scroll};
		border-radius: 3px;
	}
`;

export const CreateColumn = styled.div`
	max-height: 100%;

	> button {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 27rem;
		width: 27rem;
		max-width: 27rem;
		background: ${Colors["background-create-column"]};
		color: ${Colors.primary};
		font-size: 1.5rem;
		border: 2px solid ${Colors.primary};
		border-radius: 5px;
		outline: transparent;
		padding: 1rem;
		margin: 1rem 0.5rem;
		transition: 0.2s background-color ease;
		cursor: pointer;

		&:hover {
			background: ${Colors["background-create-column-hover"]};
		}
	}
`;

export const CreateTask = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background: ${Colors["background-create-task"]};
	color: ${Colors.primary};
	font-size: 1.5rem;
	border: 2px solid ${Colors.primary};
	border-radius: 5px;
	outline: transparent;
	padding: 1rem;
	transition: 0.2s background-color ease;
	cursor: pointer;

	&:hover {
		background: ${Colors["background-create-task-hover"]};
	}
`;
