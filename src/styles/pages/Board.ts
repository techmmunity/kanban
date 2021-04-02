import { BiHomeAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import styled, { css } from "styled-components";

import { Colors } from "assets/colors";

const iconCSS = css`
	width: 2.25rem;
	height: 2.25rem;
`;

export const Container = styled.main<{ background?: string }>`
	> section {
		min-height: 100vh;
		height: 100vh;
		max-height: 100vh;
		background: ${({ background }) => background && `url(${background})`};
		background-position: center;
		background-size: cover;

		> header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 5.2rem;
			padding: 1rem 0.5rem;

			> div {
				display: flex;
				align-items: center;

				> a {
					display: flex;
					align-items: center;
					justify-content: center;
					background: ${Colors["background-icon-container"]};
					color: ${Colors.primary};
					border-radius: 3px;
					outline: transparent;
					padding: 0.5rem;
					margin: 0 0 0 0.5rem;
					transition: background-color 0.2s ease;
					cursor: pointer;

					&:hover,
					&:focus,
					&:active {
						background: ${Colors["background-icon-container-hover"]};
					}
				}
			}
		}
	}
`;

export const HomeIcon = styled(BiHomeAlt)`
	${iconCSS}
`;

export const Title = styled.h1`
	font-size: 2.2rem;
	margin: 0 0.5rem;
`;

export const SettingsIcon = styled(FiSettings)`
	${iconCSS}
`;
