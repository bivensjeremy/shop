'use client'

import { useEffect } from "react"
// import { Dropdown, Ripple, initTE, Collapse, } from "tw-elements";
import  Dropdown from "tw-elements";
import  Ripple from "tw-elements";
import  {initTE} from "tw-elements";
import  Collapse from "tw-elements";

export const TWElementsInit = () => {
    useEffect(() => {
        initTE({ Dropdown, Ripple, Collapse })
    }, []);
    return null
}
