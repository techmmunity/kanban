import { Board } from "components/Board";

import { Container, Header } from "./styles";

export const Panel = () => (
	<Container>
		<Header>
			<div>
				<h1>Panel 1</h1>
			</div>
		</Header>
		<Board />
	</Container>
);
