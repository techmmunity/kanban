import ReactMarkdown, { NodeType } from "react-markdown";

import { Container } from "./styles";

interface Props {
	title: string;
	color?: string;
}

export const Task: React.FC<Props> = ({ title, color }) => {
	const allowedMarkdownTypes: Array<NodeType> = [
		"text",
		"break",
		"paragraph",
		"strong",
		"link",
		"inlineCode",
	];

	return (
		<Container color={color}>
			<ReactMarkdown
				allowedTypes={allowedMarkdownTypes}
				skipHtml
				unwrapDisallowed
			>
				{title}
			</ReactMarkdown>
		</Container>
	);
};
