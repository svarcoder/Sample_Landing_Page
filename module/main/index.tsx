import axios from "axios";
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import Header from "../header/index";
import Footer from "../footer/index";
import Card from "../../shared/card/index";
import {
	BodyDesc,
	BodyTitle,
	BodyWrap,
	CardGrid,
	CurrentNews,
	OtherNews,
	ShotNews,
} from "./style";

const LandingPage = () => {
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		axios
			.get("/feed")
			.then((response) => {
				const parser = new Parser();
				parser.parseString(response.data, (err, feed: any) => {
					setData(feed);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log({ data });

	return (
		<>
			<Header />
			<BodyWrap>
				<BodyTitle>{data?.title}</BodyTitle>
				<BodyDesc>{data?.description}</BodyDesc>
				<CurrentNews>
					{data?.items &&
						data?.items.map((item: any, i: number) => {
							return i === 0 ? (
								<>
									{window.screen.width > 1100 && (
										<CardGrid key={i}>
											<Card
												type={3}
												img={
													"https://media.cnn.com/api/v1/images/stellar/prod/230317182610-02-fairleigh-dickinson-v-purdue.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
												}
												title={item?.title}
												date={item?.isoDate}
												link={item?.link}
												creator={item?.creator}
											/>
										</CardGrid>
									)}
								</>
							) : (
								<>
									<Card
										type={1}
										img={
											"https://media.cnn.com/api/v1/images/stellar/prod/230317182610-02-fairleigh-dickinson-v-purdue.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
										}
										title={item?.title}
										date={item?.isoDate}
										link={item?.link}
										creator={item?.creator}
									/>
								</>
							);
						})}
				</CurrentNews>

				<BodyTitle>More US Sports News</BodyTitle>
				<OtherNews>
					{data?.items &&
						data?.items.map((item: any, i: number) => {
							return (
								<Card
									key={i}
									type={window.screen.width < 700 ? 1 : 2}
									img={
										"https://media.cnn.com/api/v1/images/stellar/prod/230317182610-02-fairleigh-dickinson-v-purdue.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
									}
									title={item?.title}
									date={item?.isoDate}
									link={item?.link}
									creator={item?.creator}
								/>
							);
						})}
				</OtherNews>

				<BodyTitle>World Sport News</BodyTitle>
				<ShotNews>
					{data?.items &&
						data?.items.map((item: any, i: number) => {
							return window.screen.width < 700 ? (
								<Card
									key={i + 1}
									type={1}
									img={
										"https://media.cnn.com/api/v1/images/stellar/prod/230317182610-02-fairleigh-dickinson-v-purdue.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
									}
									title={item?.title}
									date={item?.isoDate}
									link={item?.link}
									creator={item?.creator}
								/>
							) : (
								<Card
									key={i + 1}
									type={3}
									img={
										"https://media.cnn.com/api/v1/images/stellar/prod/230317182610-02-fairleigh-dickinson-v-purdue.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
									}
									title={item?.title}
									date={item?.isoDate}
									link={item?.link}
									creator={item?.creator}
								/>
							);
						})}
				</ShotNews>
			</BodyWrap>
			<Footer />
		</>
	);
};

export default LandingPage;
