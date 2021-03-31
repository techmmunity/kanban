import { IBoard } from "types/interfaces/Board";

const BOARDS_PER_ROW = 4;
const MIN_ROWS = 2;

const fillWithComponent = (length: number) =>
	Array(length)
		.fill(null)
		.map((_, index) => ({ key: index }));

export const getBoardsToFill = (boards: Array<IBoard>) => {
	const minBoardsQtd = BOARDS_PER_ROW * MIN_ROWS;

	if (boards.length < minBoardsQtd) {
		const toFill = minBoardsQtd - boards.length;

		return fillWithComponent(toFill);
	}

	const diff = boards.length % BOARDS_PER_ROW;

	if (diff === 0) {
		return [];
	}

	const toFill = BOARDS_PER_ROW - diff;

	return fillWithComponent(toFill);
};
