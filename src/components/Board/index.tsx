import { Column } from "components/Column";
import { Task } from "components/Task";

import { columns } from "temp/initialData";

import { IColumn } from "types/interfaces/Column";
import { ITask } from "types/interfaces/Task";

import { Container, Columns, Tasks } from "./styles";

export const Board = () => (
	<Container>
		<Columns>
			{columns.map(({ id, title, tasks }: IColumn) => (
				<Column key={id} title={title}>
					<Tasks>
						{tasks.map(({ id, title }: ITask) => (
							<Task key={id} title={title} />
						))}
					</Tasks>
				</Column>
			))}
		</Columns>
	</Container>
);
