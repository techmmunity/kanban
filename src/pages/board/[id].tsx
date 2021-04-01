import Error from "next/error";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Painel } from "components/Painel";

import { boards } from "temp/initialData/boards";

import {
	Container,
	Home,
	HomeIcon,
	Title,
	Settings,
	SettingsIcon,
} from "styles/pages/Board";

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
							<Link href="/">
								<Home>
									<HomeIcon />
								</Home>
							</Link>
							<Title>{title}</Title>
						</div>
						<div>
							<Link href="/settings">
								<Settings>
									<SettingsIcon />
								</Settings>
							</Link>
						</div>
					</header>
					<Painel columns={columns} />
				</section>
			</Container>
		</>
	);
};

export default Board;
