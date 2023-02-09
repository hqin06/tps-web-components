import React from 'react'
import numeral from "numeral"
import {Tooltip} from "antd";
import _Tools from "./_Tools";

interface Props {
    value?: number
    format?: string
    nullEmpty?: boolean
    suffix?: string|React.ReactNode
    prefix?: string|React.ReactNode
    style?: React.CSSProperties
}

const TextAmount:React.FC<Props> = function (
    {
        value,
        format="0,0.[0000]",
        nullEmpty=true,
        suffix,
        prefix,
        style,
        ...props
    })
{
    if(nullEmpty&&!value&&(value !==0)) return <span />

    return (
        <Tooltip
            trigger={["hover"]}
            title={_Tools.transNumberToChinese(value)}
        >
            <span>{prefix}</span>
            <span style={style}>{numeral(value).format(format)}</span>
            <span>{suffix}</span>
        </Tooltip>
    )
};

export default TextAmount;


