import { BiHomeAlt } from "react-icons/bi";

import styled from "styled-components";

import { Colors } from "assets/colors";

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
			height: 4.2rem;
			padding: 1rem 0.5rem;

			> div {
				display: flex;
				align-items: center;

				> h1 {
					font-size: 2.2rem;
					margin: 0 0.5rem;
				}
			}
		}
	}
`;

export const Home = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${Colors["background-home"]};
	color: ${Colors.primary};
	border-radius: 3px;
	padding: 0.5rem;
	margin: 0 0.5rem 0 0;
	transition: background-color 0.2s ease;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		background: ${Colors["background-home-hover"]};
	}
`;

export const HomeIcon = styled(BiHomeAlt)`
	width: 2.25rem;
	height: 2.25rem;
`;
