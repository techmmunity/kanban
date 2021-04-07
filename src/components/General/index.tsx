import Image from "next/image";

import { useState, useRef, useCallback, useEffect, Fragment } from "react";
import { useForm, useFormState } from "react-hook-form";

import { Input } from "components/Input";

import { horizontalScrolling } from "helpers/global/horizontalScrolling";

import { backgrounds } from "temp/backgrounds";

import { IBackground } from "types/interfaces/Backgrounds";

import {
	Container,
	SectionTitle,
	Form,
	BoardTitle,
	BoardBackground,
	Title,
	Backgrounds,
	Background,
	Label,
	OthersBackground,
	ChangeContainer,
} from "./styles";

interface Props {
	title: string;
	background: string;
}

interface IForm {
	title: string;
}

export const General: React.FC<Props> = ({ title, background }) => {
	const [currentBackground, setCurrentBackground] = useState(background);

	const othersBackgroundRef = useRef<HTMLDivElement>(null);

	const { register, handleSubmit, control } = useForm<IForm>({
		defaultValues: {
			title,
		},
	});

	const { errors } = useFormState({ control });

	const onSubmit = useCallback((data: IForm) => {
		console.log(data);
	}, []);

	useEffect(() => {
		if (othersBackgroundRef.current) {
			horizontalScrolling(othersBackgroundRef.current);
		}
	}, [othersBackgroundRef]);

	return (
		<Container>
			<SectionTitle>General</SectionTitle>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<BoardTitle>
					<Input
						title="Title"
						error={errors.title}
						{...register("title", {
							required: { value: true, message: "This is required!" },
						})}
					/>
				</BoardTitle>
				<BoardBackground>
					<Title>Background</Title>
					<Backgrounds>
						<Background type="radio" id="current" checked readOnly />
						<Label htmlFor="current">
							<Image src={currentBackground} layout="fill" />
						</Label>
						<OthersBackground ref={othersBackgroundRef}>
							{backgrounds.map(({ id, background }: IBackground) => (
								<Fragment key={id}>
									<Background
										type="radio"
										id={id}
										name="image"
										defaultChecked={
											background === currentBackground ? true : false
										}
										onClick={() => setCurrentBackground(background)}
									/>
									<Label htmlFor={id}>
										<Image src={background} layout="fill" />
									</Label>
								</Fragment>
							))}
						</OthersBackground>
					</Backgrounds>
				</BoardBackground>
				<ChangeContainer>
					<input type="submit" value="Change" />
				</ChangeContainer>
			</Form>
		</Container>
	);
};
