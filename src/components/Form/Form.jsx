// import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/icon-arrow.svg";
import backgroundImg from "../../assets/images/pattern-bg-desktop.png";

function Form({ value, setValue, handleSubmit }) {
	return (
		<Wrapper>
			<h1>IP Address Tracker</h1>
			<FormContainer onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="Search for any IP address or domain"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<SubmitBtn type="submit">
					<img src={arrow} alt="" />
				</SubmitBtn>
			</FormContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 30%;
	background-image: url(${backgroundImg});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid var(--dark-gray);
	padding-top: 40px;

	& h1 {
		color: var(--white);
		padding-bottom: 16px;
	}
`;

const FormContainer = styled.form`
	display: flex;
`;

const Input = styled.input`
	width: 450px;
	border-radius: 10px 0 0 10px;
	border: none;
	padding: 12px 20px;
	font-size: 18px;

	@media (max-width: 550px) {
		width: 100%;
	}
`;

const SubmitBtn = styled.button`
	height: 100%;
	width: 50px;
	background-color: var(--dark-gray);
	color: var(--white);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0;
	border: none;
	border-radius: 0 10px 10px 0;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: var(--gray);
	}
`;

export default Form;
