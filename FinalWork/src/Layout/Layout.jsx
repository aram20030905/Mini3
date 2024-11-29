import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import React, {useState} from 'react';
function Layout({size, setShow}){
 
   
    return(
        <div>
            <Navigation size1={size} setShow1={setShow}/>
            <Outlet/>
        </div>
    )

}
export default Layout