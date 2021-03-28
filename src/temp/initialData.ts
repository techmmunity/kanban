import { IColumn } from "types/interfaces/Column";
import { ITask } from "types/interfaces/Task";

export const tasks: Array<ITask> = [
	{
		id: "task1",
		title: "Task 1",
	},
];

export const task1: Array<ITask> = [
	{
		id: "task1",
		title:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi ullam necessitatibus iste, eveniet assumenda repellat ad commodi rem nulla esse molestias dolor ducimus consequatur distinctio voluptatibus tempore optio consectetur.",
	},
	{
		id: "task2",
		title: "Task 2",
	},
	{
		id: "task3",
		title:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi ullam necessitatibus iste, eveniet assumenda repellat ad commodi rem nulla esse molestias dolor ducimus consequatur distinctio voluptatibus tempore optio consectetur.",
	},
	{
		id: "task4",
		title: "Task 4",
	},
	{
		id: "task5",
		title: "Task 5",
	},
	{
		id: "task6",
		title:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi ullam necessitatibus iste, eveniet assumenda repellat ad commodi rem nulla esse molestias dolor ducimus consequatur distinctio voluptatibus tempore optio consectetur.",
	},
];

export const task2: Array<ITask> = [
	{
		id: "task1",
		title:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi ullam necessitatibus iste, eveniet assumenda repellat ad commodi rem nulla esse molestias dolor ducimus consequatur distinctio voluptatibus tempore optio consectetur.",
	},
	{
		id: "task2",
		title: "Task 2",
	},
	{
		id: "task3",
		title: "Task 3",
	},
];

export const task3: Array<ITask> = [
	{
		id: "task1",
		title: "Task 1",
	},
	{
		id: "task2",
		title: "Task 2",
	},
];

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
