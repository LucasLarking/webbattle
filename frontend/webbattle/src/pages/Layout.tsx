import html2canvas from 'html2canvas';
import React, { ChangeEvent, useRef, useState } from 'react'

import BattlePage from './day3/createpage/BattlePage';
import { Outlet } from 'react-router-dom';


const Layout = () => {


    return (
        <>

            {/* <BattlePage /> */}
            <Outlet />
        </>
    )
}

export default Layout