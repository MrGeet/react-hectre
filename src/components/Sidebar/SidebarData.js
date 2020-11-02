import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Fruits',
        path: '/fruits',
        icon: <GiIcons.GiFruitBowl/>,
        cName: 'nav-text'
    },
    {
        title: 'Water',
        path: '/water',
        icon: <FaIcons.FaSprayCan/>,
        cName: 'nav-text'
    },
    {
        title: 'Time',
        path: '/time',
        icon: <MdIcons.MdTimer/>,
        cName: 'nav-text'
    },
    {
        title: 'Progress',
        path: '/progress',
        icon: <CgIcons.CgTimelapse/>,
        cName: 'nav-text'
    },
    {
        title: 'Finance',
        path: '/finance',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title: 'Location',
        path: '/location',
        icon: <GoIcons.GoLocation/>,
        cName: 'nav-text'
    },
    {
        title: 'Graphs',
        path: '/graph',
        icon: <BsIcons.BsFillBarChartFill/>,
        cName: 'nav-text'
    },
    {
        title: 'List',
        path: '/list',
        icon: <CgIcons.CgList/>,
        cName: 'nav-text'
    },

]