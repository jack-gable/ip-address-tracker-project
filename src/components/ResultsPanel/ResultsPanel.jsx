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
						<Result>{data.location.region || "NY 10001"}</Result>
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
`;

const FlexContainer = styled.div`
	background-color: var(--white);
	width: auto;
	display: flex;
	justify-content: center;
	gap: 24px;
	border-radius: 10px;
	padding: 24px;
`;

const Container = styled.div`
	overflow-wrap: break-word;
	&:not(:last-of-type) {
		border-right: 1px solid var(--gray);
		padding-right: 18px;
	}
`;

const Title = styled.p`
	color: var(--gray);
	font-size: 0.6rem;
	font-weight: 700;
	text-transform: uppercase;
`;

const Result = styled.p`
	color: var(--dark-gray);
	font-weight: 500;
	font-size: 1.2rem;
`;

export default ResultsPanel;
