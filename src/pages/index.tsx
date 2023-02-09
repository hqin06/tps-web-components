import React from "react"
import _ from "lodash"
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, message } from 'antd'
import { TextAmount } from '../components'

import 'antd/dist/antd.less'
import './index.less'


const HomePage = function () {
    return (
        <ConfigProvider locale={zhCN}>
            <div>dd</div>
            <TextAmount value={'20'} prefix="￥" suffix="元" />
        </ConfigProvider>
    )
};

export default HomePage;

