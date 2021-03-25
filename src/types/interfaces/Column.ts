import { ITask } from "types/interfaces/Task";

export interface IColumn {
	id: string;
	title: string;
	tasks: Array<ITask>;
}
