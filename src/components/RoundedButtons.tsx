const RoundedButtonFilled = (props: {prefix?:any, text: string, postfix?: any}) => {
    return (
        <button className="bg-winter-cian rounded-full flex gap-[8px] text-white font-bold px-[24px] py-[18px] items-center">
            {props.prefix}
            {props.text}
            {props.postfix}
        </button>
    )
}

const RoundedButtonOutlined = (props: {prefix?:any, text: string, postfix?: any}) => {
    return (
        <button className="border-winter-cian border-[1px] rounded-full flex gap-[8px] text-winter-cian px-[24px] py-[18px] items-center">
            {props.prefix}
            {props.text}
            {props.postfix}
        </button>
    )
}

export default RoundedButtonFilled
export {RoundedButtonOutlined}