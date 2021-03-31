import styled from "styled-components";

export const Container = styled.main<{ url_image?: string }>`
	> section {
		min-height: 100vh;
		height: 100vh;
		max-height: 100vh;
		background: ${({ url_image }) => url_image && `url(${url_image})`};
		background-position: center;
		background-size: cover;

		> header {
			display: flex;
			align-items: center;
			height: 5.6rem;
			padding: 1rem;

			> div {
				> h1 {
					font-size: 2.6rem;
				}
			}
		}
	}
`;
