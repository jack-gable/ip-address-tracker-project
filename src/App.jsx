import React from "react";
import "./App.css";
import styled from "styled-components";
import Form from "./components/Form";
import ResultsPanel from "./components/ResultsPanel";
import Map from "./components/Map";

function App() {
	const [value, setValue] = React.useState("");
	const [ipData, setIpData] = React.useState([]);

	const DOMAIN_ENDPOINT = `https://geo.ipify.org/api/v2/country,city?apiKey=at_IibgxvDV1So3hXB8rnvJWJVlQ2efZ&domain=${value}`;
	const IP_ENDPOINT = `https://geo.ipify.org/api/v2/country,city?apiKey=at_IibgxvDV1So3hXB8rnvJWJVlQ2efZ&ipAddress=${value}`;

	const isValidDomain = (inputValue) => {
		const domainRegex =
			/^(?!:\/\/)([a-zA-Z0-9-]+\.){1,}([a-zA-Z]{2,})(:[0-9]+)?$/;
		return domainRegex.test(inputValue);
	};

	const isValidIPAddress = (inputValue) => {
		const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
		return ipRegex.test(inputValue);
	};

	function handleSubmit(event) {
		event.preventDefault();
		if (isValidDomain(value) || isValidIPAddress(value)) {
			const getIpData = async () => {
				try {
					const response = await fetch(
						isValidDomain(value) ? DOMAIN_ENDPOINT : IP_ENDPOINT
					);

					if (!response.ok) {
						throw new Error("Failed to fetch weather data");
					}

					const json = await response.json();
					setIpData(json);
				} catch (error) {
					console.error(error);
				}
			};

			getIpData();
		}
	}

	const data = {
		ip: ipData?.ip,
		isp: ipData?.isp,
		location: {
			city: ipData?.location?.city,
			region: ipData?.location?.region,
		},
		timezone: ipData?.location?.timezone,
	};

	const lat = ipData?.location?.lat;
	const lon = ipData?.location?.lng;

	return (
		<>
			<Wrapper>
				<Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
				<ResultsPanel data={data} />
				<Map latitude={lat} longitude={lon} />
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	height: 100vh;
	position: relative;
	isolation: isolate;
`;

export default App;
