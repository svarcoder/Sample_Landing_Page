import styled from "styled-components";

export const FooterWrap = styled.div`
	background: black;
	color: white;
	padding: 20px;
	display: grid;
	grid-row-gap: 18px;
`;
export const FooterMain = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 15px;
	grid-row-gap: 18px;
	@media (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
export const FooterDown = styled.div``;
export const FooterEl = styled.div``;
export const FooterHeadTitle = styled.div``;
export const FooterTitle = styled.div``;
