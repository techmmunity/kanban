import { ITask } from "types/interfaces/Task";

export interface IColumn {
	id: string | number;
	title: string;
	tasks: Array<ITask>;
}
