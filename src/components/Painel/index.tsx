import { useRef, useEffect } from "react";

import { Column } from "components/Column";
import { Task } from "components/Task";

import { horizontalScrolling } from "helpers/global/horizontalScrolling";

import { IColumn } from "types/interfaces/Column";
import { ITask } from "types/interfaces/Task";

import { Container, Columns, CreateColumn, Tasks, CreateTask } from "./styles";

interface Props {
	columns: Array<IColumn>;
}

export const Painel: React.FC<Props> = ({ columns }) => {
	const columnsRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (columnsRef.current) {
			horizontalScrolling(columnsRef.current);
		}
	}, []);

	return (
		<Container>
			<Columns ref={columnsRef}>
				{columns.map(({ id, title, tasks }: IColumn) => (
					<Column key={id} title={title}>
						<Tasks>
							{tasks.map(({ id, ...task }: ITask) => (
								<Task key={id} {...task} />
							))}
							<CreateTask>Add Task</CreateTask>
						</Tasks>
					</Column>
				))}
				<div>
					<CreateColumn>Create Column</CreateColumn>
				</div>
			</Columns>
		</Container>
	);
};
