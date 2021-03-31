import Link from "next/link";

import { getBoardsToFill } from "./helpers/getBoardsToFill";

import { boards } from "temp/initialData/boards";

import { IBoard } from "types/interfaces/Board";

import { Container, Board, GhostBoard } from "./styles";

export const Boards = () => {
	const ghostBoards = getBoardsToFill(boards);

	return (
		<Container>
			{boards.map(({ id, title, url_image }: IBoard) => {
				let newTitle = title;

				if (newTitle.length > 35) {
					newTitle = newTitle.substring(0, 32) + "...";
				}

				return (
					<Board key={id} url_image={url_image}>
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
			{ghostBoards.map(({ key }) => (
				<GhostBoard key={key} />
			))}
		</Container>
	);
};
