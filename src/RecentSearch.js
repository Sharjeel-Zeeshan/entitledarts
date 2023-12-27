import React from 'react'
import "./StyleRecent.css"
import { CgAirplane } from "react-icons/cg";


function RecentSearch() {
    return (
        <>
       <div className='container '>
        <h4 className='mt-2'>RECENT SEARCHES</h4>
       </div>
       <div className='container recent'>
        <div className='sin'>SIN</div> 
        <span className='w-4'><CgAirplane size={30} /></span>
        <span className="lax">LAX</span>
       </div>
       <div className="date">Depart On:7 sep 2021</div>

        </>
    )
}

export default RecentSearch
