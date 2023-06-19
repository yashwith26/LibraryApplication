import React from 'react'
import { NavLink } from 'react-router-dom'
import { CurrentlyReading } from './HomePageComponents/CurrentlyReading/CurrentlyReading'
import { Read } from './HomePageComponents/Read/Read'
import { WantToRead } from './HomePageComponents/WantToRead/WantToRead'

export function HomePage(){
    return(
        <div className="top-container">
            <h2>Library</h2>
            <NavLink to="/search">Click to search</NavLink>
            <CurrentlyReading/>
            <WantToRead/>
            <Read/>

        </div>
    )
}