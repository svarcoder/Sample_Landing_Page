import styled from "styled-components";

export const CardWrapper = styled.div`
	padding: 10px;
`;
export const CardMain1 = styled.div`
	display: flex;
	flex-direction: row;
`;
export const CardMain2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.div<{ type: number }>`
	margin-left: ${({ type }) => (type === 1 ? "8px" : "")};
	margin-top: ${({ type }) => (type === 2 ? "12px" : type === 3 ? "18px" : "")};
	/* color: #0c0c0c; */
	font-family: var(--theme-container__font-family);
	font-size: 16px;
	font-weight: var(--theme-container__font-weight);
	letter-spacing: 0.5px;
	line-height: 22px;
	text-align: left;
	width: 100%;
	@media (max-width: 700px) {
		font-size: 10px;
	}
`;

export const CardFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 10px 0px;
	@media (max-width: 700px) {
		font-size: 10px;
	}
`;
