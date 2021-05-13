import React, { useState } from 'react'
import style from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {
    const dispatch = useDispatch()
    
    return (
        <div className={style.menu}>
            <NavLink to={'/startLocation'}><p onClick={() => { dispatch({ type: 'START_GAME' }) }}>Играть</p></NavLink>
        </div>
    )
}

export default Menu;