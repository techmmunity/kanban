import { Container, Plus } from "./styles";

interface Props {
	title: string;
}

export const Column: React.FC<Props> = ({ title, children }) => (
	<Container>
		<div>
			<div>
				<span>{title}</span>
				<Plus />
			</div>
			{children}
		</div>
	</Container>
);
