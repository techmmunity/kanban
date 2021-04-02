import Link from "next/link";

import { useState, useMemo } from "react";

import { formatTitle } from "./helpers/formatTitle";
import { getBoardsToFill } from "./helpers/getBoardsToFill";

import { boards } from "temp/initialData/boards";

import { IBoard } from "types/interfaces/Board";

import { Container, Board, GhostBoard } from "./styles";

export const Boards = () => {
	const [state] = useState<Array<IBoard>>(boards);

	const ghostBoards = useMemo(
		() => getBoardsToFill(state).map(({ key }) => <GhostBoard key={key} />),
		[state],
	);

	return (
		<Container>
			{boards.map(({ id, title, background }: IBoard) => {
				const newTitle = formatTitle(title);

				return (
					<Board key={id} background={background}>
						<Link href={`/board/${id}`}>
							<a>
								<div>
									<span>{newTitle}</span>
								</div>
							</a>
						</Link>
					</Board>
				);
			})}
			{ghostBoards}
		</Container>
	);
};
