import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useState } from "react"
import cafes from '../assets/road_cafe.json'
import attraction from '../assets/attraction.json'
import "leaflet/dist/leaflet.css";
import { HiOutlineBuildingOffice2, HiOutlineCalendar, HiOutlineHeart, HiOutlineXMark } from "react-icons/hi2";
import { LuCalendar, LuCar, LuGoal, LuMedal } from "react-icons/lu";

function Test() {
  const [showCafe, setShowCafe] = useState(false)
  const [showAttraction, setShowAttraction] = useState(false)
  return (
    <div className='flex h-full w-full'>
      <LeftBar />
      <div className="flex flex-col gap-10 w-full h-screen">
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
      <div className="w-[400px] bg-sky-400 h-screen">
      </div>
    </div>
  )
}

const LeftBar = () => {
  return (
    <div className="w-[400px] h-screen">
      <input type="text" />
      <div className="flex flex-col gap-[16px]">
        <div className="min-h-[1px] bg-winter-cian"></div>
        <LeftBarItem icon={<LuCar strokeWidth={2.5} size={24}/>} text="Транспортная достпуность" onClick={() => {}}/>
        <div className="min-h-[1px] bg-winter-cian"></div>
        <LeftBarItem icon={<HiOutlineHeart strokeWidth={2.5} size={24}/>} text="Туристическая привлекательность" onClick={() => {}}/>
        <div className="min-h-[1px] bg-winter-cian"></div>
        <LeftBarItem icon={<HiOutlineCalendar strokeWidth={2.5} size={24}/>} text="Круглогодичность" onClick={() => {}}/>
        <div className="min-h-[1px] bg-winter-cian"></div>
        <LeftBarItem icon={<HiOutlineBuildingOffice2 strokeWidth={2.5} size={24}/>} text="Обеспеченность инфраструктуры" onClick={() => {}}/>
        <div className="min-h-[1px] bg-winter-cian"></div>
        <LeftBarItem icon={<LuMedal strokeWidth={2.5} size={24}/>} text="Уникальность" onClick={() => {}}/>
      </div>
    </div>
  )
}

const LeftBarItem = (props: {icon: any, text: string, onClick: any}) => {
  return (
    <button className="flex items-center text-winter-cian justify-between px-[22px] h-[38px] font-semibold text-[16px] hover:bg-winter-cian hover:bg-opacity-10" onClick={() => props.onClick()}>
      <div>{props.icon}</div>
      <p className="font-semibold">{props.text}</p>
      <div><HiOutlineXMark color="#583E7B" strokeWidth={2.5} size={24}/></div>
    </button>
  )
}

export default Test