import React from "react";
import Home from "../container/Home"
import About from "../container/About"
import Faq from "../container/Faq"
import Steps from "../container/Steps"
export default [
    {
        link:"/",
        component: <Home/>,
    },
    {
        link:"/about",
        component: <About/>,
    },
    {
        link:"/faq",
        component: <Faq/>,
    },
    {
        link:"/steps",
        component: <Steps/>,
    },
]