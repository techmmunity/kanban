import { useEffect, useRef } from "react";

import { stopPropagationHorizontalScrolling } from "helpers/global/stopPropagationHorizontalScrolling";

import { Container, Plus, PlusIcon } from "./styles";

interface Props {
	title: string;
}

export const Column: React.FC<Props> = ({ title, children }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			stopPropagationHorizontalScrolling(containerRef.current);
		}
	}, []);

	return (
		<Container>
			<div ref={containerRef}>
				<div>
					<span>{title}</span>
					<Plus>
						<PlusIcon />
					</Plus>
				</div>
				{children}
			</div>
		</Container>
	);
};
