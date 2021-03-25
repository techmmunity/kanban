import { FaPlus } from "react-icons/fa";

import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.li`
	display: flex;
	flex-direction: column;
	width: 27rem;
	max-height: 95%;
	background: ${Colors["background-column"]};
	border-radius: 5px;
	padding: 1rem;
	margin: 0 0.5rem;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0 1rem 0;

	> span {
		font-size: 2.4rem;
		font-weight: bold;
	}
`;

export const Plus = styled(FaPlus)`
	width: 2rem;
	height: 2rem;
	cursor: pointer;
`;
