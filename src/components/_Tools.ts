import _ from "lodash"
import base64url from 'base64url'
import moment from 'moment'
import { history } from 'umi'


// @ts-ignore
const transNumberToChinese = function (num) {
    if (!/^\d*(\.\d*)?$/.test(num)) return "";

    let AA = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    let BB = ["", "拾", "佰", "仟", "万", "亿", "点", ""];
    let a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (let i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0]))
                    re = BB[4] + re;
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        // @ts-ignore
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
        // @ts-ignore
        if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }
    if (a.length > 1) {
        re += BB[6];
        // @ts-ignore
        for (let i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
    }
    return re;


}
export default {
    transNumberToChinese,
}
