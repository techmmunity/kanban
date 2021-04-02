import { IColumn } from "./Column";

export interface IBoard {
	id: string | number;
	title: string;
	background: string;
	columns: Array<IColumn>;
}
