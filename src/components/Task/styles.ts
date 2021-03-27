import styled from "styled-components";

import { isDarkColor } from "assets/colors";

export const Container = styled.li<{ color?: string }>`
	background: ${({ color }) => color || "#ffffff"};
	color: ${({ color }) =>
		color && isDarkColor(color) ? "#ffffff" : "#000000"};
	border-radius: 3px;
	padding: 0.8rem 0.5rem;
	margin: 0.8rem 0;

	&:nth-child(1) {
		margin: 0 0 0.8rem 0;
	}
`;
