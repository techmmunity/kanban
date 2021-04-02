import ReactMarkdown, { NodeType } from "react-markdown";

import { Container } from "./styles";

interface Props {
	title: string;
	code: string;
	color?: string;
}

export const Task: React.FC<Props> = ({ title, code, color }) => {
	const allowedMarkdownTypes: Array<NodeType> = [
		"text",
		"break",
		"paragraph",
		"strong",
		"link",
		"inlineCode",
	];

	return (
		<Container id={code} color={color}>
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
