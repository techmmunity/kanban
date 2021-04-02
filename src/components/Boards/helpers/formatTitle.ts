export const formatTitle = (title: string) => {
	if (title.length > 35) {
		return title.substring(0, 32) + "...";
	}

	return title;
};
