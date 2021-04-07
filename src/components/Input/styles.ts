import { FieldError } from "react-hook-form";

import styled from "styled-components";

import { Colors } from "assets/colors";

export const Title = styled.span`
	font-size: 2rem;
`;

export const Container = styled.input<{ error?: FieldError }>`
	min-width: 25rem;
	width: 90%;
	height: 4.5rem;
	background: ${({ error }) =>
		error ? Colors["background-input-error"] : Colors["background-input"]};
	color: ${Colors.primary};
	font-size: 2rem;
	border: 0;
	border-radius: 3px;
	outline: transparent;
	padding: 0 1.25rem;
	margin: 1rem 0;
	transition: background-color 0.2s ease;
`;
