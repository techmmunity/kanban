import styled from "styled-components";

export const Container = styled.section`
	min-height: 100vh;
	height: 100vh;
	max-height: 100vh;
	background: url("images/background.webp");
	background-position: center;
	background-size: cover;
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	height: 5.6rem;
	padding: 1rem;

	> div {
		> h1 {
			font-size: 2.8rem;
		}
	}
`;
