import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.li`
	background: ${Colors["background-task"]};
	color: ${Colors.secondary};
	border-radius: 3px;
	padding: 0.8rem 0.5rem;
	margin: 1rem 0.25rem;

	&:first-child,
	&:last-child {
		margin: 0 0.25rem;
	}
`;
