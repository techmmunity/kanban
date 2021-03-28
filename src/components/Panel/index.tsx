import Head from "next/head";

import { Board } from "components/Board";

import { Container, Header } from "./styles";

export const Panel = () => (
	<>
		<Head>
			<title>Painel 1 · Kanban</title>
		</Head>
		<Container>
			<Header>
				<div>
					<h1>Panel 1</h1>
				</div>
			</Header>
			<Board />
		</Container>
	</>
);
