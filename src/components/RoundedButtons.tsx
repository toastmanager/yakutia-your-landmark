const RoundedButtonFilled = (props: {prefix?:any, text: string, postfix?: any, bgColor?: string, textColor?: string, borderColor?: string, onClick?: Function}) => {
    const bg = props.bgColor !== undefined ? `bg-${props.bgColor}` : "bg-winter-cian"
    const text = props.textColor !== undefined ? `text-${props.textColor}` : "text-white"
    const border = props.borderColor !== undefined ? `border-${props.borderColor}` :  `border-${bg.substring(3)}`
    const onClick = props.onClick !== undefined ? props.onClick : () => {}
    return (
        <button onClick={() => onClick()} className={`${bg} ${text} rounded-full flex gap-[8px] font-bold px-[24px] py-[18px] items-center border-[1px] hover:${border} hover:bg-inherit hover:text-${bg.substring(3)}`}>
            {props.prefix}
            {props.text}
            {props.postfix}
        </button>
    )
}

const RoundedButtonOutlined = (props: {prefix?:any, text: string, postfix?: any, borderColor?: string, textColor?: string, onClick?: Function}) => {
    const borderColor = props.borderColor !== undefined ? props.borderColor : 'border-winter-cian'
    const textColor = props.textColor !== undefined ? props.textColor : 'text-winter-cian'
    const onClick = props.onClick !== undefined ? props.onClick : () => {}
    return (
        <button onClick={() => onClick()} className={borderColor + ' ' + textColor + " border rounded-full flex gap-[8px] px-[24px] py-[18px] items-center"}>
            {props.prefix}
            {props.text}
            {props.postfix}
        </button>
    )
}

export default RoundedButtonFilled
export {RoundedButtonOutlined}