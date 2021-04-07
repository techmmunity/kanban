import { forwardRef } from "react";
import { Ref } from "react";
import { FieldError } from "react-hook-form";

import { Title, Container } from "./styles";

interface Props {
	title: string;
	defaultValue?: string;
	error?: FieldError;
}

export const Input: React.FC<Props> = forwardRef(
	({ title, defaultValue, error, ...register }, ref: Ref<HTMLInputElement>) => (
		<>
			<Title>{title}</Title>
			<Container
				ref={ref}
				defaultValue={defaultValue}
				error={error}
				{...register}
			/>
			{error && <p>{error.message}</p>}
		</>
	),
);
