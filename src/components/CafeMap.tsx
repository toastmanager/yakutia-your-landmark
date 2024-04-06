import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import cafes from '../assets/road_cafe.json'
import attraction from '../assets/attraction.json'
import { useState } from "react";

const CafeMap = () => {
    const [showCafe, setShowCafe] = useState(false)
    const [showAttraction, setShowAttraction] = useState(false)

    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-[15px]">
                <label className="">
                    <input type="checkbox" checked={showCafe} onChange={() => setShowCafe(!showCafe)}/>
                    Придорожные кафе
                </label>
                <label className="">
                    <input type="checkbox" checked={showAttraction} onChange={() => setShowAttraction(!showAttraction)}/>
                    Достопримечательности
                </label>
            </div>
            <MapContainer attributionControl={false} center={[63.035668, 129.71956]} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {showCafe ? cafes.features.map((feature) => (
                    <Marker position={[feature.attributes.Широта, feature.attributes.Долгота]}>
                        <Popup>
                            <p>{feature.attributes.Наименование}</p>
                            <p>{feature.attributes.Широта}° {feature.attributes.Долгота}°</p>
                        </Popup>
                    </Marker>
                )) : undefined}
                {showAttraction ? attraction.features.map((feature) => (
                    <Marker position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}>
                        <Popup>
                            <p>{feature.properties.Наименование}</p>
                            <p>{feature.properties["Адрес местонахождения"]}</p>
                            <p>{feature.geometry.coordinates[1]}° {feature.geometry.coordinates[0]}°</p>
                        </Popup>
                    </Marker>
                )) : undefined}
            </MapContainer>
        </div>
    )
}

export default CafeMap