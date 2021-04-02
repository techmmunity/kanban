import styled from "styled-components";

import { Colors } from "assets/colors";
import { isDarkColor } from "helpers/assets/isDarkColor";

export const Container = styled.li<{ color?: string }>`
	background: ${({ color }) => color || Colors.primary};
	color: ${({ color }) =>
		color && isDarkColor(color) ? Colors.primary : Colors.secondary};
	border-radius: 3px;
	padding: 0.8rem 0.5rem;
	margin: 0.8rem 0;

	&:last-child {
		margin: 0.8rem 0 0 0;
	}

	&:first-child {
		margin: 0;
	}
`;
