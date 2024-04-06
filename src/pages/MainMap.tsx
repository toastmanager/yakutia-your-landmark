import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet"
import { DivIcon } from "leaflet"
import { useState } from "react"
import { HiOutlineBuildingOffice2, HiOutlineCalendar, HiOutlineHeart, HiOutlineHome } from "react-icons/hi2";
import { LuCar, LuMedal } from "react-icons/lu";
import { Link } from "react-router-dom";
import cafe from '../assets/cafe.svg'
import hotel from '../assets/hotel.svg'
import hotels from '../assets/hotels.json'
import attraction from '../assets/attraction.svg'
import cafes from '../assets/road_cafe.json'
import attractions from '../assets/attraction.json'
import "leaflet/dist/leaflet.css";
import { renderToStaticMarkup } from "react-dom/server";
import { MapDescAttraction, MapDescInfrastructure, MapDescUniqueness, MapDescVehicle, MapDescYearAvailability } from "../configs/MapFiltersInfo";

function SetViewOnClick() {
  useMapEvent('click', (e) => {
    console.log(e.latlng)
  })
  return undefined
}

function MainMap() {
  const [showCafe, setShowCafe] = useState(false)
  const [showAttractions, setShowAttractions] = useState(false)
  const [showHotels, setShowHotels] = useState(false)
  const cafeIcon = new DivIcon({html: renderToStaticMarkup(<img src={cafe} />), className: "bottom-0", iconAnchor: [25, 65]})
  const hotelIcon = new DivIcon({html: renderToStaticMarkup(<img src={hotel} />), className: "bottom-0", iconAnchor: [25, 65]})
  const attractionIcon = new DivIcon({html: renderToStaticMarkup(<img src={attraction}/>), className: "bottom-0", iconAnchor: [25, 65]})

  return (
    <div className='flex h-full w-full'>
      <LeftBar />
      <div className="flex flex-col gap-10 w-full h-screen">
            <MapContainer attributionControl={false} center={[63.035668, 129.71956]} zoom={5} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SetViewOnClick />
                {showCafe ? cafes.features.map((feature) => (
                    <Marker position={[feature.attributes.Широта, feature.attributes.Долгота]} icon={cafeIcon}>
                        <Popup>
                            <p>{feature.attributes.Наименование}</p>
                            <p>{feature.attributes.Широта}° {feature.attributes.Долгота}°</p>
                        </Popup>
                    </Marker>
                )) : undefined}
                {showHotels ? hotels.map((feature) => {
                  return (
                    <Marker position={[parseFloat(feature.Широта), parseFloat(feature.Долгота)]} icon={hotelIcon}>
                        <Popup>
                            <p>{feature["Наименование объекта "]}</p>
                            <p>{feature.Широта}° {feature.Долгота}°</p>
                        </Popup>
                    </Marker>
                  )
                }) : undefined}
                {showAttractions ? attractions.features.map((feature) => (
                    <Marker position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]} icon={attractionIcon}>
                        <Popup>
                            <p>{feature.properties.Наименование}</p>
                            <p>{feature.properties["Адрес местонахождения"]}</p>
                            <p>{feature.geometry.coordinates[1]}° {feature.geometry.coordinates[0]}°</p>
                        </Popup>
                    </Marker>
                )) : undefined}
            </MapContainer>
        </div>
      <div className="min-w-[400px] h-screen flex flex-col">
        <label>
          <input type="checkbox" checked={showCafe} onChange={() => setShowCafe(!showCafe)}/>
          Придорожные кафе
        </label>
        <label>
          <input type="checkbox" checked={showAttractions} onChange={() => setShowAttractions(!showAttractions)}/>
          Достопримечательности
        </label>
        <label>
          <input type="checkbox" checked={showHotels} onChange={() => setShowHotels(!showHotels)}/>
          Гостиницы
        </label>
      </div>
    </div>
  )
}

const LeftBar = () => {
  return (
    <div className="min-w-[400px] max-w-[400px] h-screen flex flex-col justify-between">
      <div className="overflow-scroll">
        <input type="text" />
        <div className="flex flex-col gap-[16px]">
          <div className="min-h-[1px] bg-winter-cian"></div>
          <LeftBarItem icon={<LuCar strokeWidth={2.5} size={24}/>} text="Транспортная достпуность" description={MapDescVehicle} />
          <div className="min-h-[1px] bg-winter-cian"></div>
          <LeftBarItem icon={<HiOutlineHeart strokeWidth={2.5} size={24}/>} text="Туристическая привлекательность" description={MapDescAttraction}/>
          <div className="min-h-[1px] bg-winter-cian"></div>
          <LeftBarItem icon={<HiOutlineCalendar strokeWidth={2.5} size={24}/>} text="Круглогодичность" description={MapDescYearAvailability}/>
          <div className="min-h-[1px] bg-winter-cian"></div>
          <LeftBarItem icon={<HiOutlineBuildingOffice2 strokeWidth={2.5} size={24}/>} text="Обеспеченность инфраструктуры" description={MapDescInfrastructure}/>
          <div className="min-h-[1px] bg-winter-cian"></div>
          <LeftBarItem icon={<LuMedal strokeWidth={2.5} size={24}/>} text="Уникальность" description={MapDescUniqueness}/>
        </div>
      </div>
      <div>
          <div className="min-h-[1px] bg-winter-cian"></div>
          <div className="flex items-center px-[22px] h-[64px] flex justify-between">
            <div></div>
            <Link to="/">
              <HiOutlineHome className="w-[24px] text-[16px] text-winter-cian" size={24}/>
            </Link>
          </div>
      </div>
    </div>
  )
}

const LeftBarItem = (props: {icon: any, text: string, description?: string}) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <button className="flex items-center text-winter-cian justify-between px-[22px] h-[38px] w-full font-semibold text-[16px] hover:bg-winter-cian hover:bg-opacity-10" onClick={() => setExpanded(!expanded)}>
        <div>{props.icon}</div>
        <p className="font-semibold w-full text-start pl-[12px]">{props.text}</p>
        <div></div>
        {/* <div><HiOutlineXMark color="#583E7B" strokeWidth={2.5} size={24}/></div> */}
      </button>
      {expanded ? <p className="px-[22px] pl-[60px] pt-[10px] text-[14px] text-winter-purple">{props.description}</p> : undefined}
    </div>
  )
}

export default MainMap