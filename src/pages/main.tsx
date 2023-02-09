import React from "react"
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'
interface MainWrapProps {
    children?: React.ReactNode
}

const MainWrap: React.FC<MainWrapProps> = function (props) {

    return (
        <ConfigProvider locale={zhCN}>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </ConfigProvider>
    )
};

export default MainWrap;

