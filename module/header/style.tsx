import styled from "styled-components";

export const HeaderWrap = styled.div`
	position: fixed;
	width: 100%;
	padding: 5px;
	background: black;
	color: #e6e6e6;
`;
export const HeaderMain = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const RLEle = styled.div`
	display: flex;
`;
export const LTEle = styled.div`
	display: flex;
`;
export const HeaderTitle = styled.div<{ active?: boolean }>`
	padding: 10px;
	cursor: pointer;
	color: ${({ active }) => (active ? "white" : "")};
`;
export const LogIn = styled.button`
	padding: 10px;
	cursor: pointer;
	border: 1px solid #e6e6e6;
	border-radius: 5px;
	background: black;
	color: #e6e6e6;
	:hover {
		background: #b1b1b1;
	}
`;
