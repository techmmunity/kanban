import ReactMarkdown from "react-markdown";

import { Container } from "./styles";

interface Props {
	title: string;
	color?: string;
}

export const Task: React.FC<Props> = ({ title, color }) => (
	<Container color={color}>
		<ReactMarkdown
			allowedTypes={[
				"text",
				"break",
				"paragraph",
				"strong",
				"link",
				"inlineCode",
			]}
			unwrapDisallowed
		>
			{title}
		</ReactMarkdown>
	</Container>
);
