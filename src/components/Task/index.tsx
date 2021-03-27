import { Container } from "./styles";

interface Props {
	title: string;
	color?: string;
}

export const Task: React.FC<Props> = ({ title, color }) => (
	<Container color={color}>
		<p>{title}</p>
	</Container>
);
