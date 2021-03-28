export const stopPropagationHorizontalScrolling = (element: HTMLElement) => {
	const stopScrollHorizontally = (e: WheelEvent) => {
		e.stopPropagation();
	};

	// IE9, Chrome, Safari, Opera
	element.addEventListener(
		"mousewheel",
		stopScrollHorizontally as EventListenerOrEventListenerObject,
		false,
	);

	// Firefox
	element.addEventListener(
		"DOMMouseScroll",
		stopScrollHorizontally as EventListenerOrEventListenerObject,
		false,
	);
};
