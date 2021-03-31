import { IColumn } from "./Column";

export interface IBoard {
	id: string;
	title: string;
	url_image?: string;
	columns: Array<IColumn>;
}
