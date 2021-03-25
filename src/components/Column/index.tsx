import { Container, Title, Plus } from "./styles";

interface Props {
	title: string;
}

export const Column: React.FC<Props> = ({ title, children }) => (
	<Container>
		<Title>
			<span>{title}</span>
			<Plus />
		</Title>
		{children}
	</Container>
);
