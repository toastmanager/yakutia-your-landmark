import logo_big from '../assets/logo_big.svg'

const Footer = () => {
    return (
        <div className="text-winter-cian flex flex-col gap-[38px]">
            <div className="flex justify-between items-center">
                <img src={logo_big} className='h-[115px]'/>
                <div className='flex gap-[40px]'>
                    <button>О нас</button>
                    <button>Цены</button>
                    <button>Блог</button>
                    <button>Контакты</button>
                </div>
                <div className='flex gap-[16px]'>
                    <SocialBox letter='w'/>
                    <SocialBox letter='t'/>
                    <SocialBox letter='i'/>
                    <SocialBox letter='v'/>
                </div>
            </div>
            <div className="flex flex-col gap-[32px] pb-[32px]">
                <div className="h-[1px] bg-winter-cian"></div>
                <p className="text-center">Copyright © 2024 Якутия: твоя сила духа | Все права защищены</p>
            </div>
        </div>
    )
}

const SocialBox = (props: {letter: string}) => {
    return (
        <button className='h-[36px] w-[36px] bg-winter-blue text-winter-cian rounded-[8px]'>
            {props.letter}
        </button>
    )
}

export default Footer