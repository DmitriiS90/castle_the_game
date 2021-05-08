import React, { useState } from 'react'
import style from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {
    
    return (
        <div className={style.menu}>
            <NavLink to={'/startLocation'}><p>Играть</p></NavLink>
        </div>
    )
}

export default Menu;