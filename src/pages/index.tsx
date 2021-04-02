import { Boards } from "components/Boards";

import { Container, Title } from "styles/pages/Home";

const Home = () => (
	<Container>
		<section>
			<Title>Boards</Title>
			<Boards />
		</section>
	</Container>
);

export default Home;
