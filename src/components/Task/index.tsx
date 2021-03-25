import { Container } from "./styles";

interface Props {
	title: string;
}

export const Task: React.FC<Props> = ({ title }) => (
	<Container>
		<p>{title}</p>
	</Container>
);
