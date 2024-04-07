import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet"
import { DivIcon } from "leaflet"
import { useState } from "react"
import { HiOutlineBuildingOffice2, HiOutlineCalendar, HiOutlineHeart, HiOutlineHome } from "react-icons/hi2";
import { renderToStaticMarkup } from "react-dom/server";
import { MapDescAttraction, MapDescInfrastructure, MapDescUniqueness, MapDescVehicle, MapDescYearAvailability } from "../configs/MapFiltersInfo";
import { LuCar, LuMedal } from "react-icons/lu";
import { Link } from "react-router-dom";
import cafe from '../assets/cafe.svg'
import cafes from '../assets/road_cafe.json'
import hotel from '../assets/hotel.svg'
import hotels from '../assets/hotels.json'
import attraction from '../assets/attraction.svg'
import attractions from '../assets/attraction.json'
import "leaflet/dist/leaflet.css";


function MainMap() {
  const [showCafe, setShowCafe] = useState(false)
  const [showAttractions, setShowAttractions] = useState(false)
  const [showHotels, setShowHotels] = useState(false)
  const [leftIndex, setLeftIndex] = useState(0)
  let everything = { ...attractions, ...cafes}

  const cafeIcon = new DivIcon({html: renderToStaticMarkup(<img src={cafe} />), className: "bottom-0", iconAnchor: [25, 65]})
  const hotelIcon = new DivIcon({html: renderToStaticMarkup(<img src={hotel} />), className: "bottom-0", iconAnchor: [25, 65]})
  const attractionIcon = new DivIcon({html: renderToStaticMarkup(<img src={attraction}/>), className: "bottom-0", iconAnchor: [25, 65]})
  
  
  const MarkersBar = () => {
    return (
      <div className="flex flex-col font-semibold text-[16px] gap-[16px] py-[18px]">
        <label className="flex gap-[12px] px-[18px]">
          <input type="checkbox" checked={showCafe} onChange={() => setShowCafe(!showCafe)}/>
          Придорожные кафе
        </label>
        <div className="min-h-[1px] bg-winter-cian"></div>
        <label className="flex gap-[12px] px-[18px]">
          <input type="checkbox" checked={showAttractions} onChange={() => setShowAttractions(!showAttractions)}/>
          Достопримечательности
        </label>
        <div className="min-h-[1px] bg-winter-cian"></div>
        <label className="flex gap-[12px] px-[18px]">
          <input type="checkbox" checked={showHotels} onChange={() => setShowHotels(!showHotels)}/>
          Турбазы
        </label>
      </div>
    )
  }

  function SetMarkOnClick() {
    useMapEvent('click', (e) => {
      console.log(e.latlng)
    })
    return undefined
  }
  
  const LeftBar = () => {
    return (
      <div className="min-w-[400px] max-w-[400px] h-screen flex flex-col bg-winter-blue text-winter-cian">
        <div className="mx-[20px] my-[16px] bg-white rounded-full h-[46px] px-[24px] text-[16px]">
          <input type="text" className="h-full w-full" placeholder="Введите адрес"/>
        </div>
        <div className='flex'>
          <button onClick={() => setLeftIndex(0)} className={`w-full rounded-t-[12px] ${leftIndex === 0 ? "bg-white" : "bg-transparent"}`}>Помощь</button>
          <button onClick={() => setLeftIndex(1)} className={`w-full rounded-t-[12px] ${leftIndex === 1 ? "bg-white" : "bg-transparent"}`}>Метки</button>
          <button onClick={() => setLeftIndex(2)} className={`w-full rounded-t-[12px] ${leftIndex === 2 ? "bg-white" : "bg-transparent"}`}>Поиск</button>
        </div>
        <div className="overflow-scroll bg-white h-full">
          <div className="flex flex-col gap-[16px]">
            {leftIndex === 0 ? <MapHelp /> : undefined}
            {leftIndex === 1 ? <MarkersBar /> : undefined}
            {leftIndex === 2 ? undefined : undefined}
          </div>
        </div>
        <div className="bg-white">
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
      </div>
    </div>
  )
}

const MapHelp = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div></div>
      <MapHelpItem icon={<LuCar strokeWidth={2.5} size={24}/>} text="Транспортная достпуность" description={MapDescVehicle} />
      <div className="min-h-[1px] bg-winter-cian"></div>
      <MapHelpItem icon={<HiOutlineHeart strokeWidth={2.5} size={24}/>} text="Туристическая привлекательность" description={MapDescAttraction}/>
      <div className="min-h-[1px] bg-winter-cian"></div>
      <MapHelpItem icon={<HiOutlineCalendar strokeWidth={2.5} size={24}/>} text="Круглогодичность" description={MapDescYearAvailability}/>
      <div className="min-h-[1px] bg-winter-cian"></div>
      <MapHelpItem icon={<HiOutlineBuildingOffice2 strokeWidth={2.5} size={24}/>} text="Обеспеченность инфраструктуры" description={MapDescInfrastructure}/>
      <div className="min-h-[1px] bg-winter-cian"></div>
      <MapHelpItem icon={<LuMedal strokeWidth={2.5} size={24}/>} text="Уникальность" description={MapDescUniqueness}/>
    </div>
  )
}

const MapHelpItem = (props: {icon: any, text: string, description?: string}) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <button className="flex items-center justify-between px-[22px] h-[38px] w-full font-semibold text-[16px] hover:bg-winter-cian hover:bg-opacity-10" onClick={() => setExpanded(!expanded)}>
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