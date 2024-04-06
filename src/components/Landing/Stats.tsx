import image2 from '../../assets/image2.png'

const LandingStats = () => {
    return (
        <div className="flex flex-col items-center gap-[60px]">
            <div className="text-winter-cian">
                <h1 className="font-bold text-[36px] text-center">Немного статистики о туризме</h1>
                <p className="text-center">Cъешь ещё этих мягких французских булок, да выпей же чаю</p>
            </div>
            <div>
                <div className="w-[595px] h-[595px] rounded-[15px] bg-winter-cian relative flex justify-center">
                    <div className='absolute bottom-[75px] z-10 text-white'>
                        <h1 className='text-[36px] font-bold'>Людей заинтерисовано</h1>
                        <h1 className='text-[72px] font-bold'>80%</h1>
                    </div>
                    <div className="bg-gradient-to-t from-winter-cian via-transparent from-10 opacity-70 absolute w-full h-full rounded-[15px] z-0"></div>
                    <img src={image2} className='w-full h-full object-cover rounded-[15px]'/>
                </div>
                <div></div>
            </div>
        </div>
    )
}

const StatsBlock = () => {
    return (
        <></>
    )
}
export default LandingStats