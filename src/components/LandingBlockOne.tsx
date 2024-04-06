import { HiOutlineArrowRight } from "react-icons/hi2"
import RoundedButtonFilled, { RoundedButtonOutlined } from "./RoundedButtons"
import image1 from '../assets/image1.png'

const LandingBlockOne = () => {
    return (
        <div className='
            w-full
            aspect-[1.58/1]
            relative
        '>
            <div className="absolute w-full h-full z-10 px-[48px] max-w-[700px] flex flex-col items-start justify-center text-left gap-[48px]">
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-white font-bold text-[48px]">Оценка туристического потенциала Якутии</h1>
                    <p className="text-white">Комплексная оценка рекреационного потенциала с помощью геоинформационного моделирования</p>
                </div>
                <div className="flex gap-[24px]">
                    <RoundedButtonFilled text="Начать" postfix={<HiOutlineArrowRight strokeWidth={2.5}/>} bgColor="bg-white" textColor="text-winter-cian"/>
                    <RoundedButtonOutlined text="О нас" borderColor="border-white" textColor="text-white"/>
                </div>
            </div>
            <div className="bg-gradient-to-r from-winter-cian opacity-50 absolute w-full h-full rounded-[15px] z-0"></div>
            <img src={image1} alt="" className="w-full h-full oject-cover rounded-[15px] z-0" />
        </div>
    )
}

export default LandingBlockOne