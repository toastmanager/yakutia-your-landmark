import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import cafes from '../assets/road_cafe.json'

const CafeMap = () => {
    for (let i in cafes.features) {
        let cafe = cafes.features[i]
        console.log(cafe.attributes.Наименование)
    }
    return (
        <MapContainer attributionControl={false} center={[63.035668, 129.71956]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cafes.features.map((feature) => (
                <Marker position={[feature.attributes.Широта, feature.attributes.Долгота]} >
                    <Popup>
                        <p>{feature.attributes.Наименование}</p>
                        <p>{feature.attributes.Широта}° {feature.attributes.Долгота}°</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default CafeMap