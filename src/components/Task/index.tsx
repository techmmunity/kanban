import { useEffect, useRef } from "react";

import { stopPropagationHorizontalScrolling } from "helpers/global/stopPropagationHorizontalScrolling";

import { Container } from "./styles";

interface Props {
	title: string;
	color?: string;
}

export const Task: React.FC<Props> = ({ title, color }) => {
	const containerRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			stopPropagationHorizontalScrolling(containerRef.current);
		}
	}, []);

	return (
		<Container color={color} ref={containerRef}>
			<p>{title}</p>
		</Container>
	);
};
