import { useEffect, useRef } from "react";

import { stopPropagationHorizontalScrolling } from "helpers/global/stopPropagationHorizontalScrolling";

import { Container, Title } from "./styles";

interface Props {
	title: string;
}

export const Column: React.FC<Props> = ({ title, children }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			stopPropagationHorizontalScrolling(containerRef.current);
		}
	}, [containerRef]);

	return (
		<Container>
			<div ref={containerRef}>
				<Title>
					<span>{title}</span>
				</Title>
				{children}
			</div>
		</Container>
	);
};
