import { IBoard } from "types/interfaces/Board";

import { backgrounds } from "./backgrounds";
import { columns } from "./columns";

export const boards: Array<IBoard> = [
	{
		id: "1",
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		background: backgrounds[0].background,
		columns,
	},
	{
		id: "2",
		title: "Front End - Techmmunity",
		background: backgrounds[1].background,
		columns,
	},
	{
		id: "3",
		title: "Soluções Integradas Tech Team",
		background: backgrounds[2].background,
		columns,
	},
];
