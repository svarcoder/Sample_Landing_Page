import styled from "styled-components";

export const BodyWrap = styled.div`
	padding: 60px 20px;
`;
export const BodyTitle = styled.h1`
	margin: 40px 0px;
	padding: 10px;
	font-weight: 400;
	font-size: 30px;
	font-weight: 400;
	line-height: 30px;
`;
export const BodyDesc = styled.h2`
	margin: 20px 0px;
	padding: 10px;
	font-size: 20px;
	font-weight: 400;
	line-height: 30px;
`;
export const CurrentNews = styled.div`
	display: grid;
	grid-template-rows: repeat(4, 120px);
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 8px;
	@media (max-width: 900px) {
		grid-template-rows: repeat(4, 150px);
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const CardGrid = styled.div`
	grid-row-start: 1;
	grid-row-end: 4;
`;
export const OtherNews = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-row-gap: 8px;
	@media (max-width: 1500px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 700px);
		justify-content: center;
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const ShotNews = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 8px;
	@media (max-width: 1300px) {
		grid-template-columns: repeat(1, 700px);
		justify-content: center;
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
