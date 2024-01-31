// import React from 'react';
import styled from "styled-components";

function ResultsPanel({ data }) {
	return (
		<Wrapper>
			<FlexContainer>
				<Container>
					<Title>ip address</Title>
					<Result>{data.ip || "192.212.174.101"}</Result>
				</Container>
				<Container>
					<Title>location</Title>
					<div>
						<Result>{data.location.city || "Brooklyn, "}</Result>
						<Result>{data.location.region || "New York"}</Result>
					</div>
				</Container>
				<Container>
					<Title>timezone</Title>
					<Result>UTC {data.timezone || "-05:00"}</Result>
				</Container>
				<Container>
					<Title>isp</Title>
					<Result>{data.isp || "SpaceX Starlink"}</Result>
				</Container>
			</FlexContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	background: transparent;
	width: max-content;
	z-index: 9999;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (max-width: 550px) {
		top: 38%;
	}

	@media (max-width: 375px) {
		top: 52%;
	}
`;

const FlexContainer = styled.div`
	background-color: var(--white);
	width: auto;
	display: flex;
	justify-content: center;
	gap: 24px;
	border-radius: 10px;
	padding: 24px;
	box-shadow: 0.3em 0.3em 1em var(--dark-gray);

	@media (max-width: 550px) {
		flex-direction: column;
		text-align: center;
		gap: 16px;
		padding-left: 50px;
		padding-right: 50px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	&:not(:last-of-type) {
		border-right: 1px solid var(--gray);
		padding-right: 18px;

		@media (max-width: 550px) {
			border: none;
			padding: 0;
		}
	}

	@media (max-width: 550px) {
		gap: 6px;
	}
`;

const Title = styled.p`
	color: var(--gray);
	font-size: 0.8rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 1.2px;
`;

const Result = styled.p`
	color: var(--dark-gray);
	font-weight: 500;
	font-size: 1.2rem;
`;

export default ResultsPanel;
