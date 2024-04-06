import image2 from '../../assets/image2.png'

const LandingStats = () => {
    return (
        <div className="flex flex-col items-center gap-[60px]">
            <div className="text-winter-cian">
                <h1 className="font-bold text-[36px] text-center">Немного статистики о туризме</h1>
                <p className="text-center">Cъешь ещё этих мягких французских булок, да выпей же чаю</p>
            </div>
            <div className='inline-grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows2 gap-[28px]'>
                <div className="w-[595px] h-[595px] rounded-[15px] bg-winter-cian relative flex justify-center">
                    <div className='absolute bottom-[75px] z-10 text-white'>
                        <h1 className='text-[36px] font-bold'>Людей заинтерисовано</h1>
                        <h1 className='text-[72px] font-bold'>80%</h1>
                    </div>
                    <div className="bg-gradient-to-t from-winter-cian via-transparent from-10 opacity-70 absolute w-full h-full rounded-[15px] z-0"></div>
                    <img src={image2} className='w-full h-full object-cover rounded-[15px]'/>
                </div>
                <div className='grid gap-[32px] grid-cols-2 grid-rows-2'>
                    <StatsBlock text='Точность прогноза' value={52} unit='%'/>
                    <StatsBlock text='Статистика' value={32} unit='М'/>
                    <StatsBlock text='Статистика' value={60} unit='М'/>
                    <StatsBlock text='Статистика' value={125} unit='+'/>
                </div>
            </div>
        </div>
    )
}

const StatsBlock = (props: {text: string, value: number, unit: string}) => {
    return (
        <div className='border border-winter-light-purple h-[284px] w-[284px] rounded-[15px] py-[53px] px-[30px] text-winter-cian flex flex-col justify-end'>
            <h2 className='text-[20px] font-bold'>{props.text}</h2>
            <h1 className='text-[44px] font-bold'>
                {props.value}
                <span className='text-winter-blue'>{props.unit}</span>
            </h1>
        </div>
    )
}
export default LandingStats