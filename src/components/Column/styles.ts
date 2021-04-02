import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.li`
	margin: 1rem 0.5rem;

	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-width: 27rem;
		width: 27rem;
		max-width: 27rem;
		min-height: 10rem;
		max-height: 100%;
		background: ${Colors["background-column"]};
		border-radius: 7px;
		padding: 0 1rem 1rem 1rem;
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 0;

	> span {
		font-size: 2rem;
		font-weight: bold;
	}
`;
