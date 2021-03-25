import { Board } from "components/Board";

import { Container, Header, Title } from "./styles";

export const Panel = () => (
	<Container>
		<Header>
			<div>
				<Title>Panel 1</Title>
			</div>
		</Header>
		<Board />
	</Container>
);
