import { Boards } from "components/Boards";

import { Container, Title } from "styles/pages/Home";

const Home = () => (
	<Container>
		<section>
			<div>
				<Title>Boards</Title>
				<Boards />
			</div>
		</section>
	</Container>
);

export default Home;
