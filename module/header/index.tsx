import React from "react";
import {
	HeaderMain,
	HeaderTitle,
	HeaderWrap,
	LTEle,
	LogIn,
	RLEle,
} from "./style";

const index = () => {
	return (
		<>
			<HeaderWrap>
				<HeaderMain>
					<RLEle>
						<HeaderTitle active={true}>Sports</HeaderTitle>
						{window.screen.width > 700 && (
							<>
								<HeaderTitle>Football</HeaderTitle>
								<HeaderTitle>Tennis</HeaderTitle>
								<HeaderTitle>Golf</HeaderTitle>
								<HeaderTitle>Motorsport</HeaderTitle>
								<HeaderTitle>Olympics</HeaderTitle>
							</>
						)}
					</RLEle>
					{window.screen.width > 700 && (
						<LTEle>
							<HeaderTitle>Audio</HeaderTitle>
							<HeaderTitle>Live TV</HeaderTitle>
							<HeaderTitle>More</HeaderTitle>
							<LogIn>Log In</LogIn>
						</LTEle>
					)}
				</HeaderMain>
			</HeaderWrap>
		</>
	);
};

export default index;
