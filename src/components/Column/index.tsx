import { Droppable } from "react-beautiful-dnd";

import { Container } from "./styles";

export const Column: React.FC = ({ children }) => (
	<Droppable droppableId="column">
		{({ droppableProps, innerRef, placeholder }) => (
			<Container {...droppableProps} ref={innerRef}>
				{children}
				{placeholder}
			</Container>
		)}
	</Droppable>
);
