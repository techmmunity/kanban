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
`;

export const Tasks = styled.ul`
	list-style: none;
	overflow-y: auto;

	::-webkit-scrollbar {
		width: 3px;
		background-color: ${Colors.primary};
	}

	::-webkit-scrollbar-thumb {
		background: ${Colors.secondary};
	}
`;
