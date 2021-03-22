import { Draggable } from "react-beautiful-dnd";

import { Container } from "./styles";

interface Props {
	id: string;
	index: number;
}

export const Task: React.FC<Props> = ({ id, index, children }) => (
	<Draggable draggableId={id} index={index}>
		{({ draggableProps, dragHandleProps, innerRef }) => (
			<Container {...draggableProps} {...dragHandleProps} ref={innerRef}>
				{children}
			</Container>
		)}
	</Draggable>
);
