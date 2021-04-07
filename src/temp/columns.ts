import { IColumn } from "types/interfaces/Column";

import { tasks, task1, task2, task3 } from "./tasks";

export const columns: Array<IColumn> = [
	{
		id: "column1",
		title: "Column 1",
		tasks: task1,
	},
	{
		id: "column2",
		title: "Column 2",
		tasks: task2,
	},
	{
		id: "column3",
		title: "Column 3",
		tasks: task3,
	},
	{
		id: "column4",
		title: "Column 4",
		tasks,
	},
	{
		id: "column5",
		title: "Column 5",
		tasks,
	},
];
