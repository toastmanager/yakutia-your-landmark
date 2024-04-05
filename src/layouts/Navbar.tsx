import { HiOutlineArrowRight } from 'react-icons/hi'
import logo from '../assets/logo.svg'
import RoundedButtonFilled, { RoundedButtonOutlined } from '../components/RoundedButtons'

const Navbar = () => {
    return (
        <nav className="w-screen h-[115px] border-y-2 border-y-winter-blue flex justify-center">
            <div className='w-[1220px] h-full flex justify-between items-center p-[8px]'>
                <img src={logo} alt="Yakutia your landmark logo" />
                <div className='flex gap-[33px]'>
                    <button className='text-winter-cian'>Личный кабинет</button>
                    <button className='text-winter-cian'>О нас</button>
                    <button className='text-winter-cian'>Контакты</button>
                    <RoundedButtonOutlined text='Авторизация' />
                    <RoundedButtonFilled text='Начать' postfix={<HiOutlineArrowRight strokeWidth={2.5}/>}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar