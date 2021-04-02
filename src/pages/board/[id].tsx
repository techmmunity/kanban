import Error from "next/error";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { ColumnsContainer } from "components/ColumnsContainer";

import { boards } from "temp/initialData/boards";

import { Container, HomeIcon, Title, SettingsIcon } from "styles/pages/Board";

const Board = () => {
	const router = useRouter();
	const id = Number(router.query.id) - 1;
	const board = boards[id];

	if (!board) {
		return <Error statusCode={404} />;
	}

	const { title, background, columns } = board;

	return (
		<>
			<Head>
				<title>{title} | Kanban</title>
			</Head>
			<Container background={background}>
				<section>
					<header>
						<div>
							<Link href="/">
								<a>
									<HomeIcon />
								</a>
							</Link>
							<Title>{title}</Title>
						</div>
						<div>
							<Link href={`${id}/settings`}>
								<a>
									<SettingsIcon />
								</a>
							</Link>
						</div>
					</header>
					<ColumnsContainer columns={columns} />
				</section>
			</Container>
		</>
	);
};

export default Board;
