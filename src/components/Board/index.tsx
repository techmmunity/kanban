import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { initialData } from "temp/initialData";

import { Column } from "components/Column";
import { Task } from "components/Task";

import { usePersistedState } from "hooks/usePersistedState";

import { Container } from "./styles";

export const Board = () => {
	const [data, setData] = usePersistedState("data", initialData);

	const handleOnDragEnd = (result: DropResult) => {
		if (result.destination) {
			const items = Array.from(data);
			const [reorderedItem] = items.splice(result.source.index, 1);
			items.splice(result.destination.index, 0, reorderedItem);

			setData(items);
		}
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Container>
				<Column>
					{data.map(({ id, name }, index) => (
						<Task key={id} id={id} index={index}>
							{name}
						</Task>
					))}
				</Column>
			</Container>
		</DragDropContext>
	);
};
