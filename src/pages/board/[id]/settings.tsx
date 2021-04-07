import Error from "next/error";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { General } from "components/General";

import { boards } from "temp/boards";

import {
	Container,
	ArrowLeftContainer,
	ArrowLeftIcon,
	Title,
	Sections,
} from "styles/pages/Settings";

const Settings: React.FC = () => {
	const router = useRouter();
	const id = router.query.id;
	const idBoard = Number(id) - 1;
	const board = boards[idBoard];

	if (!board) {
		return <Error statusCode={404} />;
	}

	const { title, background } = board;

	return (
		<>
			<Head>
				<title>{title} | Settings | Kanban</title>
			</Head>
			<Container>
				<section>
					<header>
						<ArrowLeftContainer>
							<Link href={`../${id}`}>
								<a>
									<ArrowLeftIcon />
								</a>
							</Link>
						</ArrowLeftContainer>
						<Title>Settings</Title>
					</header>
					<Sections>
						<General title={title} background={background} />
					</Sections>
				</section>
			</Container>
		</>
	);
};

export default Settings;
