const BOARDS_PER_ROW = 4;
const MIN_ROWS = 2;

const fillWithComponent = (length: number) =>
	Array(length)
		.fill(null)
		.map((_, index) => ({ key: index }));

export const getBoardsToFill = (length: number) => {
	const minBoardsQtd = BOARDS_PER_ROW * MIN_ROWS;

	if (length < minBoardsQtd) {
		const toFill = minBoardsQtd - length;

		return fillWithComponent(toFill);
	}

	return [{ key: 0 }];
};
