import React from "react";
import { NextImage } from "../image/NextImage";
import { CardFooter, CardMain1, CardMain2, CardWrapper, Title } from "./style";
import Link from "next/link";
import moment from "moment";

interface Props {
	type: number;
	img: string;
	title: string;
	date: string;
	link: string;
	creator: string;
}

const Index = (props: Props) => {
	const { type, img, title, date, link, creator } = props;
	return (
		<>
			<CardWrapper>
				<Link href={link}>
					{type === 1 && (
						<CardMain1>
							<NextImage src={img} alt='' height={70} width={180} />
							<Title type={type}>{title}</Title>
						</CardMain1>
					)}

					{type === 2 && (
						<CardMain2>
							<NextImage src={img} alt='' height={202} width={450} />
							<Title type={type}>{title}</Title>
						</CardMain2>
					)}
					{type === 3 && (
						<CardMain2>
							<NextImage src={img} alt='' height={200} width={650} />
							<Title type={type}>{title}</Title>
						</CardMain2>
					)}

					<CardFooter>
						<p>{moment(date).format("LLL")}</p>
						<p>{creator}</p>
					</CardFooter>
				</Link>
			</CardWrapper>
		</>
	);
};

export default Index;
