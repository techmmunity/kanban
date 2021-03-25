import { IColumn } from "types/interfaces/Column";
import { ITask } from "types/interfaces/Task";

export const task1: Array<ITask> = [
	{
		id: "task1",
		title:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum nulla id orci accumsan, eu condimentum leo placerat. Curabitur lorem mauris, ornare quis turpis in, lacinia viverra erat. Morbi vel arcu in sem tempor vestibulum nec non leo. Aenean id semper diam, et congue eros. Fusce vitae nibh a purus blandit aliquam. Nam feugiat nulla ac porta volutpat. Donec nec eros pulvinar, viverra sapien non, euismod augue. Cras laoreet, quam vitae finibus facilisis, risus ipsum pretium purus, quis ultrices erat lacus ut lorem. Integer rutrum turpis sed auctor feugiat. Etiam at quam vitae purus eleifend rutrum at eu turpis. Nunc fermentum consequat elementum. Vivamus fermentum augue vel justo sollicitudin fermentum. Mauris quam nulla, varius in risus sed, aliquet suscipit turpis. Integer mattis porta arcu mattis aliquet. Nullam tristique porta vehicula. Ut at ante at odio imperdiet efficitur.",
	},
	{
		id: "task2",
		title: "Task 3",
	},
	{
		id: "task3",
		title: "Task 3",
	},
];

export const task2: Array<ITask> = [
	{
		id: "task1",
		title: "Task 1 ",
	},
	{
		id: "task2",
		title: "Task 3",
	},
	{
		id: "task3",
		title: "Task 3",
	},
];

export const task3: Array<ITask> = [
	{
		id: "task1",
		title: "Task 1 ",
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
];
