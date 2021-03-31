import styled from "styled-components";

export const Container = styled.main`
	> section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;

		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
`;

export const Title = styled.h1`
	font-size: 4.5rem;
	padding: 2rem 1.25rem;
`;
