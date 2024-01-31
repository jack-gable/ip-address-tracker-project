// import React from 'react';
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import LocationIcon from "../../assets/images/icon-location.svg";

function Map({ latitude = 51.5072, longitude = 0.1276 }) {
	const position = [latitude, longitude];

	const markerIcon = new L.Icon({
		iconUrl: LocationIcon,
		iconSize: [46, 56],
	});

	return (
		<>
			<MapWrapper
				center={position}
				zoom={13}
				key={`${latitude}-${longitude}`}
				scrollWheelZoom={false}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="Map data © OpenStreetMap contributors"
				/>
				<Marker position={position} icon={markerIcon} />
			</MapWrapper>
		</>
	);
}

const MapWrapper = styled(MapContainer)`
	width: 100%;
	height: 70%;
`;

export default Map;
