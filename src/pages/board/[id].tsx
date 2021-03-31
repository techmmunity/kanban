import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

import { Painel } from "components/Painel";

import { boards } from "temp/initialData/boards";

import { Container } from "styles/pages/Board";

const Board = () => {
	const router = useRouter();
	const id = Number(router.query.id) - 1;

	const board = boards[id];

	if (!board) {
		return <Error statusCode={404} />;
	}

	const { title, url_image, columns } = board;

	return (
		<>
			<Head>
				<title>{title} · Kanban</title>
			</Head>
			<Container url_image={url_image}>
				<section>
					<header>
						<div>
							<h1>{title}</h1>
						</div>
					</header>
					<Painel columns={columns} />
				</section>
			</Container>
		</>
	);
};

export default Board;
