export const horizontalScrolling = (element: HTMLElement) => {
	const scrollHorizontally = (e: WheelEvent) => {
		e.preventDefault();

		const delta = Math.max(-1, Math.min(1, e.deltaY || -e.detail));

		element.scrollLeft += delta * 40;
	};

	// IE9, Chrome, Safari, Opera
	element.addEventListener(
		"mousewheel",
		scrollHorizontally as EventListenerOrEventListenerObject,
		false,
	);

	// Firefox
	element.addEventListener(
		"DOMMouseScroll",
		scrollHorizontally as EventListenerOrEventListenerObject,
		false,
	);
};
